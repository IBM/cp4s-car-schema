# Import Schema 

## asset 

### Type: array 

### name* 

* Description: name of an asset 

* Type: string 

* required: true 

### business_value 

* Description: business value of the asset, should be a number of a scale 1 to 10 

* Type: number,null 

### risk 

* Description: risk related to the asset should be a number (float) from 1 - 10 

* Type: number,null 

### description 

* Description: description for asset 

* Type: string 

### asset_type 

* Description: type for asset 

* Type: string 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

### external_id* 

* Description: a unique id of the object in the system source 

* Type: string 

* required: true 

## container 

### Type: array 

### name* 

* Description: name of the container 

* Type: string 

* required: true 

### image 

* Description: image of the container 

* Type: string 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

### external_id* 

* Description: a unique id of the object in the system source 

* Type: string 

* required: true 

## ipaddress 

### Type: array 

### _key* 

* Description: ipv4 or ipv6 address 

* Type: string 

* Pattern: ^[a-fA-F0-9:\.]+$ 

* required: true 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

## user 

### Type: array 

### external_id* 

* Description: a unique id of the object in the system source 

* Type: string 

* required: true 

### username 

* Description: username 

* Type: string 

### fullname 

* Description: full name 

* Type: string 

### job_title 

* Description: job_title 

* Type: string 

### email 

* Description: email 

* Type: string 

### description 

* Description: user description 

* Type: string 

### role 

* Description: role of the user 

* Type: string 

### family_name 

* Description: The family name of the user, or typically the last name in most western languages. 

* Type: string 

### given_name 

* Description: The given name of the user, or typically the first name in most western languages. 

* Type: string 

### upn 

* Description: upn 

* Type: string 

### user_category 

* Description: User Category - employee, vendor, customer, etc 

* Type: string 

### title 

* Description: Title for person 

* Type: string 

### employee_id 

* Description: User Code - employee number 

* Type: string 

### active 

* Description: True if the person is active 

* Type: boolean 

### department 

* Description: department name 

* Type: string 

### modified 

* Description: Last time when data source definition was modified. epoch in milliseconds 

* Type: number 

### cumulative_score 

* Description: Overall Risk score 

* Type: number 

### current_score 

* Description: Risk score from recent risk analysis 

* Type: number 

### critical 

* Description: number of critical severity violations 

* Type: number 

### high 

* Description: number of high severity violations 

* Type: number 

### medium 

* Description: number of medium severity violations 

* Type: number 

### low 

* Description: number of low severity violations 

* Type: number 

### first_occurrence 

* Description: Epoch Time when first risk was seen 

* Type: number 

### last_occurrence 

* Description: Epoch Time when latest risk was seen 

* Type: number 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

## account 

### Type: array 

### name* 

* Description: name of account 

* Type: string 

* required: true 

### created 

* Description: creation date (ms since epoch) 

* Type: number 

### active 

* Description: True if the account is active 

* Type: boolean 

### compliance_status 

* Description: True if the account is compliant 

* Type: boolean 

### modified 

* Description: Last time when account was modified. ms since epoch 

* Type: number 

### cumulative_score 

* Description: Overall Risk score 

* Type: number 

### current_score 

* Description: Risk score from recent risk analysis 

* Type: number 

### critical 

* Description: number of critical severity violations 

* Type: number 

### high 

* Description: number of high severity violations 

* Type: number 

### medium 

* Description: number of medium severity violations 

* Type: number 

### low 

* Description: number of low severity violations 

* Type: number 

### first_occurrence 

* Description: Epoch Time when first risk was seen 

* Type: number 

### last_occurrence 

* Description: Epoch Time when latest risk was seen 

* Type: number 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

### external_id* 

* Description: a unique id of the object in the system source 

* Type: string 

* required: true 

## application 

### Type: array 

### name* 

* Description: name 

* Type: string 

* required: true 

### description 

* Description: application description 

* Type: string 

### cpe 

* Description: cpe 

* Type: string 

### is_os 

* Type: boolean 

* Description: True if the application is an operating system 

### owner 

* Description: name of an application owner 

* Type: string 

### owner_code 

* Description: employee id of owner 

* Type: string 

### last_access_time 

* Description: time when application was last accessed (ms since epoch) 

* Type: number 

### threat_score 

* Type: number 

* Description: threat score for application from X-Force 

### app_type 

* Description: application type 

* Type: string 

### cumulative_score 

* Description: Overall Risk score 

* Type: number 

### current_score 

* Description: Risk score from recent risk analysis 

* Type: number 

### critical 

* Description: number of critical severity violations 

* Type: number 

### high 

* Description: number of high severity violations 

* Type: number 

### medium 

* Description: number of medium severity violations 

* Type: number 

### low 

* Description: number of low severity violations 

* Type: number 

### first_occurrence 

* Description: Epoch Time when first risk was seen 

* Type: number 

### last_occurrence 

* Description: Epoch Time when latest risk was seen 

* Type: number 

### status 

* Description: Application status 

* Type: string 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

### external_id* 

* Description: a unique id of the object in the system source 

* Type: string 

* required: true 

## hostname 

### Type: array 

### _key* 

* Description: hostname 

* Type: string 

* Pattern: ^[a-zA-Z0-9_:@=;!'%\-\.\(\)\+\,\$\*]+$ 

* required: true 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

## businessprocess 

### Type: array 

### name* 

* Description: name of the business process 

* Type: string 

* required: true 

### description 

* Description: businsess process description 

* Type: string 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

### external_id* 

* Description: a unique id of the object in the system source 

* Type: string 

* required: true 

## database 

### Type: array 

### name* 

* Description: name of the database 

* Type: string 

* required: true 

### description 

* Description: database description 

* Type: string 

### type 

* Description: database engine type 

* Type: string 

### modified 

* Description: Last time when data source definition was modified. epoch in milliseconds 

* Type: number 

### protocol 

* Description: Database protocol 

* Type: string 

### port 

* Description: Database server port 

* Type: string 

### datasource_name 

* Description: datasource name 

* Type: string 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

### external_id* 

* Description: a unique id of the object in the system source 

* Type: string 

* required: true 

## macaddress 

### Type: array 

### _key* 

* Description: a unique key i.e. the macaddress of system with ‘:’ format (e.g. 01:23:45:67:89:AB) 

* Type: string 

* Pattern: ^(?:[0-9A-Fa-f]{2}(:))(?:[0-9A-Fa-f]{2}\1){4,6}(?:[0-9A-Fa-f]{2,4}){0,1}|(?:[0-9A-Fa-f]{4}(:)){3}(?:[0-9A-Fa-f]{4})$ 

* required: true 

### interface 

* Description: interface 

* Type: string 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

## report 

### Type: object 

### _key* 

* Description: a unique identifier for report 

* Pattern: ^[a-zA-Z0-9_:@=;!'%\-\.\(\)\+\,\$\*]+$ 

* required: true 

### type* 

* Description: type of the report 

* Type: string 

* required: true 

### parameters 

* Description: parameters 

* Type: string 

### value 

* Description: value 

* Type: string 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### description 

* Description: report description 

* Type: string 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

## port 

### Type: array 

### port_number* 

* Description: port number 

* Type: integer 

* required: true 

### status 

* Description: port status 

* Type: string 

### protocol* 

* Description: protocol 

* Type: string 

* required: true 

### description 

* Description: port description 

* Type: string 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

### external_id* 

* Description: a unique id of the object in the system source 

* Type: string 

* required: true 

## source 

### Type: object 

### _key* 

* Description: a unique identifier for source 

* Pattern: ^[a-zA-Z0-9_:@=;!'%\-\.\(\)\+\,\$\*]+$ 

* required: true 

### description 

* Description: source description 

* Type: string 

### product_link 

* Description: product link 

* Type: string 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

## vulnerability 

### Type: array 

### external_properties 

* Description: external_properties 

* Type: integer 

### external_reference 

* Description: external_reference 

* Type: string 

### name* 

* Description: name 

* Type: string 

* required: true 

### base_score 

* Description: base_score 

* Type: number 

### description 

* Description: vulnerability description 

* Type: string 

### disclosed_on 

* Description: disclosed_on: epoch in milliseconds 

* Type: number 

### published_on 

* Description: published_on: epoch in milliseconds 

* Type: number 

### updated_on 

* Description: updated_on: epoch in milliseconds 

* Type: number 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

### external_id* 

* Description: a unique id of the object in the system source 

* Type: string 

* required: true 

## geolocation 

### Type: array 

### region 

* Description: name of region the asset is located in 

* Type: string 

### longitude 

* Description: longitude 

* Type: number 

### latitude 

* Description: latitude 

* Type: number 

### description 

* Description: geolocation description 

* Type: string 

### tag 

* Type: array 

* Description: Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur. 

### untag 

* Type: array 

* Description: Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur. 

### external_id* 

* Description: a unique id of the object in the system source 

* Type: string 

* required: true 

## asset_vulnerability 

### Type: array 

### port 

* Type: object 

### risk_score 

* Description: use risk score on the edge if you need to override the vulnerability base score value 

* Type: number,null 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## asset_ipaddress 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to* 

* Type: string 

* Pattern: ^ipaddress/* 

* required: true 

## asset_macaddress 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to* 

* Type: string 

* Pattern: ^macaddress/* 

* required: true 

## asset_hostname 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to* 

* Type: string 

* Pattern: ^hostname/* 

* required: true 

## asset_account 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## asset_container 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## asset_application 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## asset_database 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## asset_geolocation 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## application_port 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## account_application 

### Type: array 

### user_id 

* Description: user id of person who owns account 

* Type: string 

### last_access_time 

* Description: time when application was last accessed (ms since epoch) 

* Type: number 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## application_ipaddress 

### Type: array 

### mappingtype 

* Description: Mapping Relationship between Ip address and Application  

* Type: string 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to* 

* Type: string 

* Pattern: ^ipaddress/* 

* required: true 

## businessprocess_application 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## businessprocess_account 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## application_database 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## application_vulnerability 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## database_ipaddress 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to* 

* Type: string 

* Pattern: ^ipaddress/* 

* required: true 

## database_vulnerability 

### Type: array 

### version_level 

* Description: Database version level 

* Type: string 

### patch_level 

* Description: Database patch level 

* Type: string 

### full_version_info 

* Description: Database full version info 

* Type: string 

### result_text 

* Description: Test result text 

* Type: string 

### recommendation 

* Description: Recommendation 

* Type: string 

### severity 

* Description: severity 

* Type: string 

### category 

* Description: Test Category 

* Type: string 

### assessment_description 

* Description: Vulnerability Assessment Description 

* Type: string 

### result_details 

* Description: Test result details 

* Type: string 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## ipaddress_container 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from* 

* Type: string 

* Pattern: ^ipaddress/* 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## ipaddress_macaddress 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from* 

* Type: string 

* Pattern: ^ipaddress/* 

* required: true 

### _to* 

* Type: string 

* Pattern: ^macaddress/* 

* required: true 

## ipaddress_hostname 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from* 

* Type: string 

* Pattern: ^ipaddress/* 

* required: true 

### _to* 

* Type: string 

* Pattern: ^hostname/* 

* required: true 

## ipaddress_vulnerability 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from* 

* Type: string 

* Pattern: ^ipaddress/* 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## ipaddress_geolocation 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from* 

* Type: string 

* Pattern: ^ipaddress/* 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## ipaddress_port 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from* 

* Type: string 

* Pattern: ^ipaddress/* 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## user_account 

### Type: array 

### last_access_time 

* Description: time when account was last accessed (ms since epoch) 

* Type: number 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## account_database 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

## account_hostname 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to* 

* Type: string 

* Pattern: ^hostname/* 

* required: true 

## account_ipaddress 

### Type: array 

### total_risk_score 

* Description: Total Risk Score 

* Type: number 

### threat_analytics_score 

* Description: Threat analytics Score 

* Type: number 

### violations_score 

* Description: Violations Score 

* Type: number 

### vulnerability_score 

* Description: Vulnerability Score 

* Type: number 

### sensitive_objects_score 

* Description: Sensitive Objects Score 

* Type: number 

### select_queries_score 

* Description: Select Queries Score 

* Type: number 

### ddl_queries_score 

* Description: DDL Queries Score 

* Type: number 

### dml_queries_score 

* Description: DML Queries Score 

* Type: number 

### administrative_queries_score 

* Description: Administrative Queries Score 

* Type: number 

### high_volume_activity_score 

* Description: High Volume Activity Score 

* Type: number 

### off_work_activity_score 

* Description: Off Work Activity Score 

* Type: number 

### group_state_description 

* Description: Group State Description 

* Type: string 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to* 

* Type: string 

* Pattern: ^ipaddress/* 

* required: true 

## port_vulnerability 

### Type: array 

### created* 

* Type: number 

* Description: epoch in milliseconds 

* required: true 

### modified 

* Type: number 

* Description: this field should be missed when there is no update and should contain the last modified timestamp when there is an update  

### report* 

* Type: string 

* Description: the report _key 

* required: true 

### source* 

* Type: string 

* Description: the source _key 

* required: true 

### external_id 

* Type: string 

* Description: external identifier if exists 

### _created 

* Type: number 

* Description: epoch in milliseconds, created time 

### _modified 

* Type: number 

* Description: epoch in milliseconds, updated time 

### _deleted 

* Type: number 

* Description: epoch in milliseconds, disabled time  

### active* 

* Type: boolean 

* Description: True if the edge is active, false if the edge is disabled 

* required: true 

### _from_external_id* 

* Type: string 

* required: true 

### _to_external_id* 

* Type: string 

* required: true 

