
CAR Schema Extensibility feature allows clients to extend core CAR schema by adding Vertex and Edge collections, by adding fields to core collections and by modifying fields defined by core Schema.

A client (typically a Connector) is supposed to create and maintain/upgrade only a single extension. The process of adding, deleting or modifying an extension involves special REST API endpoint that exists for that purpose.
An example of how a Connector can add an extension and import data for extended schema can be found in the "Reference CAR connector" project: https://github.com/IBM/cp4s-car-reference-connector/blob/ed4935c03561f4875706c54143d72a4a3861758f/app.py#L33

Note that extensions work only for specific tenant and don't affect other tenants schemas in the same deployment.

# REST API

To create or update an extension send a POST request to /api/car/v3/carSchema endpoint.
The data to be sent is the following JSON structure:
```
{
    "key": <UUID>,
    "owner": <Connector Name>,
    "version": <Version Number>,
    "schema": <Schema>
}

```

Where:
- \<UUID\> is the ID of the extension. It is unique for every extension and it never changes.
- \<Connector Name\> is a name (such as "QRadar") that makes it easier to see where this extension comes from.
- \<Version Number\> is an integer number encoded as a string
- \<Schema\> is a data structure that describes additions to core schema

To get all extensions including "core" model send a GET request to /api/car/v3/carSchema endpoint.

To get a specific extension send a GET request to /api/car/v3/carSchema/\<key\> endpoint, where \<key\> specifies the extension.

To delete an extension send a DELETE request to /api/car/v3/carSchema/\<key\> endpoint, where \<key\> specifies the extension.

# Extension schema

\<Schema> in the above API is the data structure that describes additions to the CAR schema.
Here is an example extension:

```
    "schema": {
		  "vertices": [
			{
			  "name": "businessunit",
			  "properties": {
				"name": {
				  "type": "text",
				  "indexed": true,
				  "required": true
				},
				"description": {
				  "type": "text"
				}
			  }
			},
			{
			  "name": "asset",
			  "properties": {
				"encrypted": {
				  "type": "boolean"
				}
			  }
			}
		  ],
		  "edges": [
			{ "end1": "user", "end2": "businessunit" }
		  ]
    }
```

This example introduces a new vertex collection "businessunit", new edge collection that links "businessunit" objects with "user" objects and adds new "encrypted" property to "asset" collection.

## Top level object structure

The top level structure must have two children objects: "vertices" and "edges" which are arrays of vertex definition objects and edge definition objects. Each can be an empty array.

## Vertex definition object

Fields:
- name: Required. Vertex collection name is a string which should be alphabetical, with no special symbols and in lower case.
- properties: Required. An object that maps property names to property definition objects.
- validation: Optional. A "\[one-of\] validation" object (see below).

## Edge definition object

Fields:
- end1: Required. The name of a vertex collection to be linked to another vertex collection.
- end2: Required. The name of the other vertex collection to be linked.
- properties: Optional. An object that maps property names to property definition objects.
- validation: Optional. A "\[one-of\] validation" object (see below).

## Property name

Property name is a string which is alphabetical, with no special symbols and in lower case.

## Property definition

Property definition is an object that has the following structure:

```
{
    "type": <Type>,
    "indexed": <Indexed>,
    "required": <Required>,
    "unique": <Unique>,
    "validation": <Validation>,
    "description": <Description>,
    "default": <Default>
},
```

Where:
- \<Type\>: Required. Specifies the type of the property. May have the following values: "text", "numeric", "boolean", "integer", "bigint", "jsonb", "timestamp", "inet", "macaddr", "bigserial", "float". The values correspond to postgresql data types.
- \<Indexed\>: Optional. Specifies if the property needs to be indexed for faster search.
- \<Required\>: Optional. Specifies if the property value is required.
- \<Unique\>: Optional. Specifies if the property value must be unique.
- \<Validation\>: Optional. Regex-based string value validation object or Range validation object (see below).
- \<Description\>: Optional. Specifies the property description. Currently not used anywhere.
- \<Default\>: Optional. Default value of the property.

## Validation

The validation object has different formats depending on the type of validation. Multiple validations are supported.

### Regex-based string value validation

Example:
```
validation:
  [
		{
			pattern: "^[a-zA-Z0-9_:@=;!''%%\\-\\.\\(\\)\\+\\,\\$\\*]+$",
			error_message: "Invalid source ID: %. Not matching regex: ^[a-zA-Z0-9_:@=;!''%\\-\\.\\(\\)\\+\\,\\$\\*]+$",
		},
	],
},
```

Fields:
- pattern: a regex to match the value
- error_message: an error message when a value does not match

### range validation

Example:
```
validation:
  [
		{
      minimum: 0,
      maximum: 10,
      error_message: 'Invalid risk value: %. Value must be between 0 and 10',
		},
	],
},
```

Fields:
- minimum: Required. Miminum value for the field.
- maximum: Required. Maximum value for the field.
- error_message: Error message for the case when the validation does not pass.


### \[one-of\] validation

This validation is used in Vertex definition objects or Edge definition objects and it specifies that one of related field must have a value.

Example:
```
validation: [
	{
		oneOf: {
			pattern: [
				{
					required: ['longitude', 'latitude'],
				},
				{
					required: ['region'],
				},
			],
			error_message: 'For geolocation either "longitude and latitude" or "region" is required.',
		},
	},
],
```
## [Important] AJV v8 Upgrade changes
Some keywords that were supported in the AJV v6 are no longer supported and needs to be added when running validation tests. More info: https://ajv.js.org/keywords.html

Example: <br>
``` 
const Ajv2020 = require('ajv/dist/2020');
const ajv = new Ajv2020();
ajv.addKeyword('unique');
ajv.addKeyword('indexed');
ajv.addKeyword('error_message');
```
