# Introduction

CAR stands for Connected Asset/Risk. It has entities of Assets and how they are related, plus the risk associated with them. The CAR service is used to share and consume asset and risk information to better understand clients&#39; environment and risk posture. The CAR service is composed of following two parts:

1.  Build a connector to feed your asset information the shared GraphDB
2.  Consume CAR API to better understand clients&#39; env.

# Data stored in CAR

Any asset related data could be stored in CAR. In the follwoing section I will describe in more details the data stored in CAR.

Car has two types of Objects (collections)

1. Naturally keyed collections

Object will be stored using a \_key of the object name.

Only a single instance of naturally keyed objects (multiple sources share a single naturally keyed object) is supported

2. Non-naturally keyed collections

\_key will be automatically generated in insert time and look up the object using an external_id.

Multiple overlapped objects with the same external_id are supported from different sources on non-natually keyed objects.

#### Asset

Non-naturally keyed collections

CAR will store the following information about the asset: asset name, description, business value, risk, any vulnerability related to the asset and any other information that the customer willing to add.

#### Hostname

Naturally keyed collection

CAR will store the hostname, any relation that exists between the hostname-ipaddress, hostname-user, hostname-asset and any other information that the customer willing to add.

#### User

Non-naturally keyed collections

CAR will store the username, fullname, job_title, email, description, role of the user, any relation that exists between user-account and any other information that the customer willing to add.

#### Account

Non-naturally keyed collections

CAR will store the name, current_score and so on. Any relation that exists between account-ipaddress, account-asset, account-database and any other information that the customer willing to add.

#### Ipaddress

Naturally keyed collection

CAR will store the ipaddress(ipv4 and ipv6), any relation that exists between the ipaddress-macaddress, ipaddress-port, ipaddress-vulnerability, ipaddress-geolocation and any other information that the customer willing to add.

#### Macaddress

Naturally keyed collection

CAR will store the macaddress and any other information that the customer willing to add.

#### Application

Non-naturally keyed collections

CAR will store the application name, cpe, any relation that exists between the application-vulnerability, application-asset, application-database, application-port and any other information that the customer willing to add.

#### Vulnerability

Non-naturally keyed collections

CAR will store the vulnerabilities.

#### Port

Naturally keyed collections

CAR will stores the port number, protocol, status, any relation that exists between the port-vulnerability and any other information that the customer willing to add.

#### Container

Non-naturally keyed collection

CAR will store the name and the image of the container, any relation that exists between the container-asset, container-ipaddress and any other information that the customer willing to add.

#### Database

Non-naturally keyed collection

CAR will store the name and the description of the database, any relation that exists between the database-asset and any other information that the customer willing to add.

#### Geolocation

Non-naturally keyed collection

CAR will store the longitude and latitude of ipaddress location.

**More detail of CAR supported collections and edges is in this graph**

![Asset Schema](doc/generated/assetModel.png)

# Developing CAR connectors:

When developing a CAR connector it is important to build it by extending "CAR Connector Framework".
It is also potentially useful to use existing "CAR Reference Connector" project as an example.

#### CAR Connector Framework

"CAR Connector Framework" is a Python module which implements common logic that needs to be implemented by all connectors and it also contains code that simplifies common tasks related to connector's functionality.
The project has a read-me file that provides important details about how the framework is designed to be extended.

#### CAR Reference Connector

"CAR Reference Connector" is a Python project that has a server part which implements a simple Asset model server and a client part which implements a CAR connector based on "CAR Connector Framework".
The Asset model server part has Web UI, REST API, model auto-generation and supports model state deltas.
The CAR connector part demonstrates how to extend the CAR Connector Framework correctly.
The project has read-me file that provides the details about how to run both server and connector parts.

# Steps to use CAR service:

1.  Identify asset like data (assets, ips, hosts, users, databases, vulns, risk) and the relationships between those identifiers.
2.  Build an export script/service to create a report with specified data format (JSON) and then pass that report to CAR&#39;s Asset import API endpoint.
3.  Write a CRON job to run exporter script with given time interval.
4.  Retrieve data with CAR search API endpoints.

# Asset import API endpoints

These endpoints are to import data into CAR service

**An api key and password is required to connect to the api.** It will be available in apikey management page ([https://connect.security.ibm.com/apikey](https://connect.security.ibm.com/apikey)) in XFE application. The apikey and password need to be encoded by base64 and then passed in with api call.

Swagger file is attached with this document describing these API endpoints.

### `/api/car/v2/ingestion/imports (deprecated)`

### `/api/car/v2/imports`

Role: Admin

The POST request to send the updates of Assets. The size of the report is currently limited to 8MB. The schema validator is attached with this document to validate the JSON structure. The detail JSON structure can be found below.

```
curl -X POST \
  <Path of the API>/api/car/v2/imports \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0' \
  -d '{<payload of JSON data>}'
```

Response:

```
{
  "id": <string: unique id for the upload request>,
  "status": <enum: "INPROGRESS", "COMPLETE", "ERROR" >
}
```

The response message is sent as soon as the upload is finished. The ingestion of data in the GraphDB starts after the response is sent.

### `/api/car/v2/ingestion/importstatus/<id> (deprecated)`

### `/api/car/v2/importstatus/<id>`

Role: User

The GET request to check the status of the import of Asset&#39;s updates.

```
curl -X GET \
'<Path of the API>/api/car/v2/importstatus/{id}' \
-H 'Cache-Control: no-cache' \
-H 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

Response:

```
{
  "id": <string: unique id for the upload request>
  "status": <enum: "INPROGRESS", "COMPLETE", "ERROR">
}
```

### `/api/car/v2/ingestion/importstatus (deprecated)`

### `/api/car/v2/importstatus`

Role: User

The GET request to check the status of multiple imports of Asset&#39;s updates.

```
curl -X GET \
'<Path of the API>/api/car/v2/importstatus?id=<string: comma separated unique id received in response of the upload request>' \
-H 'Cache-Control: no-cache' \
-H 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0' \
```

Response:

```
[
  {
     "id":"321061ef-6074-46e6-a7e5-116f2e4fa9c1-IBMCLX01",
     "status":"INPROGRESS"
  },
  {
     "id":"861061ef-6074-46e6-a7e5-116f2e4fa9c4-IBMCLX01",
     "status":"INPROGRESS"
  },
  {
     "id":"421061ef-6074-46e6-a7e5-116f2e4fa9c3-IBMCLX01",
     "status":"INPROGRESS"
  }
]
```

### `/api/car/v2/databases`

Role: User

The GET request to get database status for account of which the apikey is provided.

```
curl -X GET \
'<Path of the API>/api/car/v2/databases' \
-H 'Cache-Control: no-cache' \
-H 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0' \
```

Response:

```
{
     "databases": [
         {
             "name": "assets-IBMCLX01",
             "graph_name": "assets",
             "missing_collections": [],
             "collections_without_indexes": [],
             "collections": [
                 "asset",
                 …
             ],
             "is_ready": true
         }
     ]
}
```

### `/api/car/v2/ingestion/databases (deprecated)`

### `/api/car/v2/databases`

Role: Admin

The POST request to create database for account of which the apikey is provided.

```
curl -X POST \
'<Path of the API>/api/car/v2/databases' \
-H 'Cache-Control: no-cache' \
-H 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

Response:

```
{
     "job_id": "34155df7-30e6-4478-90f7-06732f94e428-IBMCLX01"
}
```

### `/api/car/v2/jobstatus/<job_id>`

Role: User

The GET request to update database for account of which the apikey is provided. It

```
curl -X PATCH \
'<Path of the API>/api/car/v2/jobstatus/<job_id>' \
-H 'Cache-Control: no-cache' \
-H 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

Response:

```
{
     "id": "34155df7-30e6-4478-90f7-06732f94e428-IBMCLX01",
     "status": "<INPROGRESS, COMPLETE or ERROR>"
}
```

In case of the status is ERROR, the database creation has been failed, the returned object will contain a message about why the database couldn&#39;t get created.

### `/api/car/v2/ingestion/databases (deprecated)`

### `/api/car/v2/databases`

Role: Admin

The PATCH request to update database for account of which the apikey is provided. The body variable can be graph_name or collections_without_indexes.

```
curl -X PATCH \
'<Path of the API>/api/car/v2/databases' \
-H 'Cache-Control: no-cache' \
-H 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0' \
--data '{"graph_name": "assets"}'
```

Response:

Status Code: 200

### Note:

Before starting ingestion, the data, you need to call `GET /databases` to check if the database is ready to accept imports. If the database is ready then go ahead and start importing. If the database is not setup yet then call `POST /databases` to create the database, the creation of the database and the related indexes could take up to 30 minutes.

The following example python code is used to check the database:

```
# check if the database and indexes are created
is_db_ready = asset_db_sanity_check(logger, url, apikey)
while is_db_ready == False:
   is_db_ready = asset_db_sanity_check(logger, url, apikey)
logger.info('start importing ...')
```

Algorithm:

1.  Call GET /databases endpoint and check if Database exist with the checks of all the collections, indexes, etc.

    - Yes: move on and start importing

    - No: Call the endpoint POST /databases, the function should wait here until the database, graph, indexes are created.

```
def asset_db_sanity_check(logger, url, apikey):
    try:
        logger.info('checking database is setup ...')
        settings = get_settings()
        headers = settings['headers']
        db_url = url + DATABASE_RESOURCE
        POST_PATCH_URL = url + '/ingestion' + str(DATABASE_RESOURCE)
        r = requests.get(db_url, headers=headers)
        status_code = r.status_code
        if status_code == 400:
            # the database is not setup yet, create it
            logger.info('setting up the database, this might take several minutes')
            r = requests.post(POST_PATCH_URL, headers=headers, timeout=None)
            # sleep for 4 minutes, time of creating database, smart graph and indexes
            time.sleep(240)
            return False
        elif status_code == 200:
                r_json = r.json()
                databases = r_json['databases']
                if databases[0]['is_ready'] == True:
                    # database is ready to accept imports
                    logger.info('database is ready')
                    return True
                elif len(databases[0]['collections_without_indexes']) > 0:
                    # create indexes
                    logger.info('creating missing indexes')
                    payload = json.dumps({ 'collections_without_indexes': databases[0]['collections_without_indexes']})
                    r = self.communicator.send_patch_request(db_url, data=payload, timeout=None)
                    job_id = r.json()['job_id']
                    status = self.wait_until_done(job_id)
                    # status could be either COMPLETE or ERROR
                    if status == 'COMPLETE':
                        logger.info('database is ready')
                        return True
                    else:
                        return False
    except Exception as e:
        logger.error(e)
        Raise
```

### `/api/car/v2/source/<source_id>/full-import-in-progress`

Role: Admin

Check the status of the job by calling the endpoint GET /jobstatus/{uuid}',
Use this endpoint GET /jobstatus/{job_id} to check if the job is completed.
Once the job is completed, the system is ready for processing the full import.

```
curl -X GET \
'<Path of the API>/api/car/v2/source/<source_id>/full-import-in-progress' \
-H 'Cache-Control: no-cache' \
-H 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

Response:

Status Code: 200

### `/api/car/v2/source/<source_id>/full-import-in-progress`

Role: Admin

The DELETE request to get the database back to normal state after full import from given source after the initial import.

```
curl -X DELETE \
'<Path of the API>/api/car/v2/source/<source_id>/full-import-in-progress' \
-H 'Cache-Control: no-cache' \
-H 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

### Note:

The /full-import-in-progress endpoint should be used only if for some reason the full import is required after the initial full import. When full import needs to be done first call the GET /full-import-in-progress and then finish the import with POST /import and then call DELETE /full-import-in-progress endpoint.

# Asset Json Schema

## Json schema draft-07

The asset schema is based on [JSON SCHEMA](http://json-schema.org/) which is a vocabulary that allows you to **annotate** and **validate** JSON documents. The current version is draft-07 which what is used to build the asset json schema.

## Validator

There are multiple validators used to validate the schema. CAR is using [AJV](https://github.com/epoberezkin/ajv) validator which support darft-07.

## Structure

```
{
   "collection1": [
      {
         "field1":"value1",
         "field2":"value2"
      },
      {
         "field1":"value3",
         "field2":"value4"
      },
   ],
   ...
}
```

### CAR report requirements

CAR report requires some vertices and edges collections to be present in the report. Otherwise the report will fail or will partially pass. CAR will not accept reports that don&#39;t have the following vertices and edges:

- Vertices: source, report.
- Edges: source_report.

If a CAR report has collections (vertices and/or edges) that satisfy the CAR schema and others that does not satisfy the CAR schema then the report will partially pass. In fact the collections that have all the required fields will be imported into the graph database. And the collections that miss some or all the required fields will fail. Also, most of the keys of the collections are known in advance such as ipaddress (\_key is the ipaddress), hostname (\_key is the hostname), macaddress (\_key is the macaddress), user (\_key is username), etc. This make it easy to build the edges (relations) between the collections. In graph database edge has at least 2 required fields \_from which contains the id of the starting vertex and \_to which contains the target vertex. Example:

```
"source":{
   "_key":"console#01",
   "description":"reports coming from source console#01"
}
"report":{
   "_key":"1554344741220",
   "timestamp":"1554344741220",
   "type":"Qradar API",
   "description":"Qradar imports"
}
"source_report":{
   "_from":"source/console#01",
   "_to":"report/1554344741220"   "timestamp":"1554344741220",
}
"user":{
   "_key":"bob",
   "username":"bob"
}
"ipaddress":{
   "_key":"10.10.10.10"
}
"user_ipaddress":{
   "_from":"user/bob",
   "_to":"ipaddress/10.10.10.10",
   "timestamp":"1554344741220",
   "active":true,
   "report":"1554344741220",
   "source":"console#01",
   "external_id":"1010" // it is optional, this could be used as a unique identifier that the source system knows about. It is useful when it is needed to lookup this unique edge and disable it for some reason.
}
```

"source":{  
 "\_key":"console#01",
"description":"reports coming from source console#01"
}
"report":{  
 "\_key":"1554344741220",
"timestamp":"1554344741220",
"type":"Qradar API",
"description":"Qradar imports"
}
"source_report":{  
 "\_from":"source/console#01",
"\_to":"report/1554344741220" "timestamp":"1554344741220",
}
"user":{  
 "\_key":"bob",
"username":"bob"
}
"ipaddress":{  
 "\_key":"10.10.10.10"
}
"user_ipaddress":{  
 "\_from":"user/bob",
"\_to":"ipaddress/10.10.10.10",
"timestamp":"1554344741220",
"active":true,
"report":"1554344741220",
"source":"console#01"
}

```
 However, there are some cases where it is not possible to provide the collections identifiers, thus the graph database will auto generate those IDs. When building the JSON objects that represent the edges, it must contain some kind of indications that identify the relations existence between the collections. These indications exist usually in each asset model system, so we suggest that we add equivalent fields to \_from and \_to in order to build the edges, the new fields are \_from\_external\_id and \_to\_external\_id. Example: Assuming that in qradar asset model there is an asset &#39;A&#39; that has a vulnerability &#39;V&#39;: Asset &#39;A&#39; has: qradar\_id = 1001, name = bob-server Vulnerability &#39;V&#39; has: qradar\_id = 1234, name = Linux Kernel namespace privilege escalation, base\_score = 6 Asset &#39;A&#39; has vulnerability &#39;V&#39;. The keys for the asset and vulnerability collections in the graph database are auto generated. In order to be able to create the edge A-V, we needed to add a required field external\_id in the asset and vulnerability collections which hold their system identifiers, and add 2 fields in the edge A-V \_from\_external\_id, \_to\_external\_id, in the edge A-V.
```

"source":{  
 "\_key":"console#01",
"description":"reports coming from source console#01"
}
"report":{  
 "\_key":"1554344741220",
"timestamp":"1554344741220",
"type":"Qradar API",
"description":"Qradar imports"
}
"source_report":{  
 "\_from":"source/console#01",
"\_to":"report/1554344741220"  
 "timestamp":"1554344741220",
}
"asset":{  
 "name":"bob-server",
"external_id":"1001"
}
=====> after inserting in the graph database, asset could have key value as follow:
"asset":{  
 "\_key":"\_VFhjBH"
"name":"bob-server",
"external_id":"1001"
}
"vulnerability":{  
 "name":"Linux Kernel namespace privilege escalation",
"external_id":1234,
"base_score":6
}

=====> after inserting in the graph database, asset could have key value as follow:
"vulnerability":{  
 "\_key":"\_Ghsxdw"  
 "name":"Linux Kernel namespace privilege escalation",
"external_id":1234,
"base_score":6
}
"asset_vulnerability":{  
 "\_from_external_id":1001,
// used to search the asset external_id in the graph db,
then will be persistant as \_from = "\_VFhjBH"  
 "\_to_external_id":1234,
// used to search the vulnerability external_id in the graph db,
then will be persistant as \_to = "\_Ghsxdw"  
 "timestamp":"1554344741220",
"active":true,
"report":"1554344741220",
"source":"console#01",  
 "external_id":"1010" // it is optional,
this could be used as a unique identifier that the source system knows about. It is useful when it is needed to lookup this unique edge and disable it when the asset does not have the vulnerability anymore.
}

```
"source":{
   "_key":"console#01",
   "description":"reports coming from source console#01"
}
"report":{
   "_key":"1554344741220",
   "timestamp":"1554344741220",
   "type":"Qradar API",
   "description":"Qradar imports"
}
"source_report":{
   "_from":"source/console#01",
   "_to":"report/1554344741220"
   "timestamp":"1554344741220",
}
"asset":{
   "name":"bob-server",
   "external_id":"1001"
}
=====> after inserting in the graph database, asset could have key value as follow:
"asset":{
   "_key":"_VFhjBH"
   "name":"bob-server",
   "external_id":"1001"
}
"vulnerability":{
   "name":"Linux Kernel namespace privilege escalation",
   "external_id":1234,
   "base_score":6
}

=====> after inserting in the graph database, asset could have key value as follow:
"vulnerability":{
   "_key":"_Ghsxdw"
   "name":"Linux Kernel namespace privilege escalation",
   "external_id":1234,
   "base_score":6
}
"asset_vulnerability":{
   "_from_external_id":1001,
   // used to search the asset external_id in the graph db,
   then will be persistant as _from = "_VFhjBH"
   "_to_external_id":1234,
   // used to search the vulnerability external_id in the graph db,
   then will be persistant as _to = "_Ghsxdw"
   "timestamp":"1554344741220",
   "active":true,
   "report":"1554344741220",
   "source":"console#01",
   "external_id":"1010"   // it is optional,
   this could be used as a unique identifier that the source system knows about. It is useful when it is needed to lookup this unique edge and disable it when the asset does not have the vulnerability anymore.
}
```

### Schema for connectors

[The Import Asset Schema detail](doc/generated/importSchema.md)

# Asset Endpoints

These endpoints are to use the Assets and their relationships contained in the CAR service.

**An api key and password is required to connect to our api.** It will be available in apikey management page ( [https://connect.security.ibm.com/apikey/](https://connect.security.ibm.com/apikey/) ) in XFE application. The apikey and password need to be encoded by base64 and then passed in with api call.

Swagger file is attached with this document describing these API endpoints.

### `/api/car/v2/<COLLECTION>/<KEY>/graph`

Role: User

GET request to get details of node and other nodes connected to it.

```
curl --request GET \
--url <api path>/api/car/v2/REPLACE_COLLECTION/REPLACE_KEY/graph \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

COLLECTION could be one of the following:

&#39;ipaddress&#39; &#39;hostname&#39;, &#39;macaddress&#39;, &#39;user&#39;, &#39;account&#39; &#39;port&#39;, &#39;tags&#39;, &#39;report&#39;, &#39;vulnerability&#39;, &#39;geolocation&#39;, &#39;database&#39;, &#39;application&#39;, &#39;source&#39;, &#39;asset&#39;, &#39;container&#39;

KEY could be either the value of naturally keyed collections' \_key or the value of non-naturally keyed collection's external_id

Response:

```
[
   {
      "result": {
         "name": "Ellen Sandoval",
         "email":"gestuliz@wegab.li",
         "role":"",
         "username":"Shaylee92",
         "description":"Ji ki to vetkon erlabulu ubmumvit ekbis gowpef muinooti un lizore ur alahju asi bomvu dolo. Ag vutkih vijwi mota fuprah miogu erokidcew oficudmuz sopehos ik mosmoc jesafba womupi ok duguf pa tuja. Zetwode osjod zura kahigne jenan foikvi jidisifuk ze ib lon coehidu cifaju. Fovbismo taw melom dito canlatgec fusowe agco fe asugobi dazosbi jortikre rinuoba toriew va otu ez zopbuhog tonugpu.",
         "job_title":"Dietitian",
         "_id":"user/Jasen_Senger",
         "tags":"",
         "_key":"Jasen_Senger",
         "_rev":"_X_1hDKO--A"
      },
      "related": [
         {
            "node": {
               "_key":"kapilwov.dz",
               "_id":"hostname/kapilwov.dz",
               "_rev":"_X_1hDXG--A",
               "description":"Peg nid husuceb zebe ramomajol do isvac puujawoc ezkejwu dinnunvap le de paz vuv nun tulespa. Otgavova rulraiv kitonka ringuw vuscizbo vavu utiisumen hagik kathi afa feopdu maapene uhwej lepais kadli. Zo ceol cedo rajafo neppile penme ekodotzi lor nogna za ho nusinu cegek jamjange du ohesaki. Wuizati mu fadal wanuvazum zagpiboj ebucore ce evo mep asebibev lehum uroega jotpos va."
            },
            "link": {
               "_to":"hostname/kapilwov.dz",
               "_id":"user_hostname/23086489",
               "_from":"user/Jasen_Senger",
               "_key":"23086489",
               "_rev":"_X_1hDuK--_",
               "created":"2112-12-18T06:23:02.538Z"
            }
         },
         ...
      ]
   }
]
```

### `/api/car/v2/search/<COLLECTION>`

Role: User

POST request to get details of the list of given entities.

```
curl --request POST \
--url <api path>/api/car/v2/search/REPLACE_COLLECTION \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0' \
 --data '{ "list": ["Jasen_Senger", "Cicero_Kovacek41"] }'
```

COLLECTION could be one of the following:

&#39;ipaddress&#39; &#39;hostname&#39;, &#39;macaddress&#39;, &#39;user&#39;, &#39;port&#39;, &#39;tags&#39;, &#39;report&#39;, &#39;vulnerability&#39;, &#39;geolocation&#39;, &#39;database&#39;, &#39;application&#39;, &#39;source&#39;, &#39;asset&#39;, &#39;container&#39;

Response:

```
[
   {
      "name":"Carlos Gregory",
      "email":"mildi@co.al",
      "role":"",
      "username":"Althea_Rosenbaum",
      "description":"Vefowdu wo ogiibu guhgosu oju ureca wo emo pisoeni nujajo ma disamkul jowavo wittinac bib fiake kak.",
      "job_title":"University Administrator",
      "_id":"user/Cicero_Kovacek41",
      "tags":"",
      "_key":"Cicero_Kovacek41",
      "_rev":"_X_1hDKO--C"
   },
   {
      "name":"Ellen Sandoval",
      "email":"gestuliz@wegab.li",
      "role":"",
      "username":"Shaylee92",
      "description":"Ji ki to vetkon erlabulu ubmumvit ekbis gowpef muinooti un lizore ur alahju asi bomvu dolo.",
      "job_title":"Dietitian",
      "_id":"user/Jasen_Senger",
      "tags":"",
      "_key":"Jasen_Senger",
      "_rev":"_X_1hDKO--A"
   }
]
```

COLLECTION could be one of the following:

### `/api/car/v2/ipvulnerability`

Role: User

POST request to get all the vulnerability of given list of ipaddress.

```
curl --request POST \
--url <api path>/api/car/v2/ipvulnerability \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0' \
--data '{"list": ["10.1.1.10", "124.10.21.56"]}'
```

Response:

```
[
   {
      "ipaddress":"10.1.1.10",
      "vulnerability": [
         {
            "_id":"vulnerability/159720",
            "_key":"159720",
            "_rev":"_X6tnelK--n",
            "disclosed_on":"2014-11-26 00:00:00",
            "name":"CVE-2014-9114 - util-linux - Command Injection Issue",
            "published_on":"2017-03-31 00:00:00",
            "updated_on":"2017-04-13 14:33:00"
         }
      ]
   },

   {
      "ipaddress":"124.10.21.56",
      "vulnerability": [
         {
            "_id":"vulnerability/201815",
            "_key":"201815",
            "_rev":"_X6toqVy--f",
            "disclosed_on":"2017-10-02 00:00:00",
            "name":"CVE-2017-14495 - dnsmasq - Denial of Service Issue",
            "published_on":"2017-10-02 00:00:00",
            "updated_on":"2017-10-03 10:10:00"
         },
         {
            "_id":"vulnerability/203234",
            "_key":"203234",
            "_rev":"_X6toySW--X",
            "disclosed_on":"2018-01-30 00:00:00",
            "name":"CVE-2017-3736 - OpenSSL - Information Disclosure Issue",
            "published_on":"2017-11-02 00:00:00",
            "updated_on":"2017-11-08 13:45:00"
         }
      ]
   }
]
```

### `/api/car/v2/<COLLECTION>/<KEY/EXT\_ID>`

Role: Admin

DELETE request to hard delete specific node and edges connected to it.

```
curl --request DELETE \
--url <api path>/api/car/v2/REPLACE_COLLECTION/REPLACE_KEY \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

[  
 {  
 "ipaddress":"10.1.1.10",
"vulnerability": [
{
"_id":"vulnerability/159720",
"_key":"159720",
"_rev":"_X6tnelK--n",
"disclosed_on":"2014-11-26 00:00:00",
"name":"CVE-2014-9114 - util-linux - Command Injection Issue",
"published_on":"2017-03-31 00:00:00",
"updated_on":"2017-04-13 14:33:00"
}
]
},

Response:

```
{
   "isdeleted":true
}
```

### `/api/car/v2/<COLLECTION>/<KEY>`

Role: User

GET request to get detail of a specific node and edges connected to it.

```
curl --request GET \
--url <api path>/api/car/v2/REPLACE_COLLECTION/REPLACE_KEY \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

KEY could be either the value of naturally keyed collections' \_key or the value of non-naturally keyed collection's external_id

Response:

```
[
   {
      "name":"Carlos Gregory",
      "email":"mildi@co.al",
      "role":"",
      "username":"Althea_Rosenbaum",
      "description":"Vefowdu wo ogiibu guhgosu oju ureca wo emo pisoeni nujajo ma disamkul jowavo wittinac bib fiake kak.",
      "job_title":"University Administrator",
      "_id":"user/Cicero_Kovacek41",
      "tags":"",
      "_key":"Cicero_Kovacek41",
      "_rev":"_X_1hDKO--C"
   }
]
```

### `/api/car/v2/<COLLECTION>/risk?ids={id1},{id2}`

Role: User

GET request to get risk of list of nodes for given collection.
For this specific endpoint the valid collection are ipaddress, macaddress, hostname and user

```
curl --request GET \
--url <api path>/api/car/v2/REPLACE_COLLECTION/risk?ids=1.1.1.1,1.1.1.2 \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

Response:

```
[
   {
      "id": "1.1.1.1",
      "risk": 5
   },
   {
      "id": "1.1.1.2",
      "risk": 6.25
   }
]
```

### `/api/car/v2/source/<source>`

Role: Admin

DELETE request to soft delete all the relation coming form given data source.

```
curl --request GET \
--url <api path>/api/car/v2/source/REPLACE_SOURCE \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

Response:

Status Code: 200

### `/api/car/v2/source/<source>/<collection>`

Role: Admin

DELETE request to soft delete all the relation of the keys or external ids given.

```
curl --request GET \
--url <api path>/api/car/v2/source/REPLACE_SOURCE/REPLACE_COLLECTION?keys=1.1.1.1,2.2.2.2 \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

Response:

Status Code: 200

If deletes needs to be based on external ids the request looks as follows:

```
curl --request GET \
--url <api path>/api/car/v2/source/REPLACE_SOURCE/REPLACE_COLLECTION?external_ids=111111,222222 \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

Response:

Status Code: 200

### `/api/car/v2/source/<source>/<collection>/<key>`

Role: Admin

DELETE request to soft delete all the relation of the key.

```
curl --request GET \
--url <api path>/api/car/v2/source/REPLACE_SOURCE/REPLACE_COLLECTION/REPLACE_KEY \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

Response:

Status Code: 200

### `/api/car/v2/<collection>?key=key1`

Role: Admin

PATCH request to update the node. The node can be vertex or edge. To update vertex a key or exteranl_id is passed in query parameter and to update edge source, from and to is sent in query paramter

```
curl --request PATCH \
--url <api path>/api/car/v2/REPLACE_COLLECTION?source=source_id&from=from_key&to=to_key \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
--data {active: false}
```

Response:

Status Code: 200

Body:

```
{ success: true, message: 'Node/s has been updated successfully' }
```

### `/api/car/v2/<collection>?key=key1`

Role: User

GET request to retrive any node based on any of their attributes. The node can be vertex or edge.

```
curl --request GET \
--url <api path>/api/car/v2/REPLACE_COLLECTION?source=source_id&from=from_key&to=to_key \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
--data {active: false}
```

Response:

Status Code: 200

Body:

```
[
    {
        "_key": "null:875092757:null",
        "_id": "asset_geolocation/null:875092757:null",
        "_from": "asset/null:871103239",
        "_to": "geolocation/null:875092756",
        "_rev": "_Z1rhDOa--_",
        "active": true,
        "report": "1.56840513733e+12",
        "source": "e26afaa8b54048bea87b4ac09b536bbf",
        "timestamp": 1568405137326.274
    }
]
```

### `/api/car/v2/<collection>/<key>`

Role: Admin

PATCH request to update the node. The node can be vertex or edge. To update vertex a key or exteranl_id is passed in path and to update edge \_id is passed in path.

```
curl --request GET \
--url <api path>/api/car/v2/REPLACE_COLLECTION/REPLACE_KEY \
--header 'accept: application/json' \
--header 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
--data {active: false}
```

Response:

Status Code: 200

Body:

```
{ success: true, message: 'Node/s has been updated successfully' }
```

# GraphQL EndPoints

GraphQL Query Endpoint introduces a dynamic way to consume CAR data.
In GraphQL, filters can be applied on the query endpoint level, as well as sub object selector level.
In addition, pagination and sorting are already supported by GraphQL endpoint at all levels.
To simplify the filtering, CAR GraphQL supports global filters that are automatically applied to all levels of the query.

The default endpoint of GraphQL is

```
:3000/car/api/v3/graphql
```

Use any browser to open that link, you should see the GrapQL playground.
A example query is

```
{
  sources{
    name
  }
}
```

## The GraphQL Query EndPoints and Type Schema

### Schema

[Query EndPoint and Type Schema](doc/generated/graphQLSchema.md)

[The whole GraphQL Query SDL Schemal](doc/generated/graphQLSchema.sdl)

### GraphQL Filter

Filter can be applied in query and sub object selector with format :

```
filter: {
  operator: [values]
}

```

Operator is combined by normalized property name of car model and common operatorName with format:

```
propertyName_OperatorName

```

Example:

```
query{
  users(filter: {fullname_EQ: "David"}){
    fullname
  }
}

```

Current supported common operators:

```
  GENERIC: { EQ: 'EQUAL' },
  LOGICIAL: { AND: 'AND', OR: 'OR' },
  COMPARATIVE: {
    GT: 'GRETE THAN',
    GTE: 'GREAT THAN OR EQUAL',
    LT: 'LESS THAN',
    LTE: 'LESS THAN OR EQUAL',
  },
  INCLUDE: { IN: 'IN', NOTIN: 'NOT IN' },
  MATCH: { LIKE: 'LIKE', NOTLIKE: 'NOT LIKE' },
```

### GraohQL Global Filter

Global filter is applied to each collection in all of the search range.
It is automatically joined with other arguments in each search level by 'AND' conjunction.

Format:

```
globalFilter: {
  operator: [values]
}
```

Example:

```
query{
  ipAddrs(globalFilter: {_created_GTE: 1597196524309}){
    _id
    _created
    accounts{
      _created
    }
  }
}
```

### GraphQL pagination

offset and limit two parameters has been added into query and sub object selector, in order to support pagination for GraphQL

Example:

```
query{
  users(offset:1, limit: 1){
    fullname
  }
}
```

### GraphQL sorting

GraphQL search result can be sorted by

Format:

```
orderBy: {normalized property name: SortDirection}

SortDirection: {
   asc,
   desc
}
```

Example

```
query{
  users(orderBy: {_created:asc}){
    fullname
  }
}
```

### Overall Example

```
query{
  ipAddrs(filter: {key_IN: ["192.168.0.20","192.168.0.9"]}
    globalFilter: {_created_GTE: 1597196524309}, limit:10, orderBy: {_created:desc}){
    _id
    _created
    accounts(limit: 10, offset:1){
      _created
    }
  }
}
```

## CAR User coalescing

CAR supports importing users and accounts from multiple connectors. It is likely that these connectors import overlapping data that contains the same accounts and users. For example, one connector can import the department, job title and several accounts owned by the user and another connector can import the work location and several other accounts for the same user. Each connector's data is stored as is to preserve the connector's view of the data it owns. However CAR needs to also provide a unified view of users and accounts to its consumers. For example, if a user is returned from a DE query or is attached to a case as artifact, the analyst should be able to see all of the data available when investigating that user and not just partial data from a single connector.

User coalescing is introduced to generate a unified view of users and accounts from different CAR connectors. User coalescing includes identifying the same accounts and linking them with a new `UnifiedAccount` vertex and identifying the same users and linking them with a new `UnifiedUser` vertex. The data imported from connectors are not modified and preserved as it was imported. This helps with easily undoing any incorrect coalescing as well as preserving the connector's view of its own data.

User coalescing works as follows:

1.  During the import, a UnifiedAccount vertex is added for each unique account name in the import. The database identifier for the unified account is the MD5 hash of the account name. If a unified account vertex already exists for a new account, the new account is linked to the existing unified account with a new `unifiedaccount_account` edge. Otherwise a new unified account vertex is added for the account and account is linked to it again with a `unifiedaccount_account` edge. By the end of the import, all accounts that share the same name are unified under the same unified account vertex.
2.  During the import of data from the connector, user coalescing is executed. The first step is to identify the shared accounts and exclude them from the coalescing. Shared accounts are the accounts that are used and owned by multiple people, such as service accounts, admin accounts, etc. User coalescing relies on identifying the same accounts imported from different connectors. If users imported from different data sources own at least one account that is the same, then we can assume they are the same user. However we need to exclude the shared accounts to avoid incorrectly linking different users together. If an account is linked to more than one user by the same data source, it is flagged as a shared account in this step and is excluded from the next step.
3.  Identifying users that are related is done by traversing the graph. It starts with each new user added during the current import and traverses the graph from user to its related user over `user_account` and `unifiedaccount_account edges`:

```
user1 ---user_account--> account1 ---unifiedaccount_account--> unifiedaccount ---unifiedaccount_account--> account2 ---user_acount-->user2
```

Inactive edges and the edges that belong to shared accounts are excluded from the traversal but existing inactive unified edges are left in the graph to preserve history. After traversal is complete for all new users, the identified related users are linked together with new `UnifiedUser` vertices.

4.  If a user or account is later deactivated via CAR REST API, user coalescing is run for the deactivated users and accounts to generate the new view. The existing `unifieduser_user` edges for the deactivated user are also deactivated but are not removed from the graph to preserve history.

# GraphQL example queries for unified users

- Fetch details of all users in the database:

```
users {
  fullname
  department
  job_title
}
```

- Fetch the same details for all users as above but also group the users into their related (unified users):

```
unifiedusers {
  users {
    fullname
    department
    job_tile
  }
}
```

- Fetch the details of a user by full name:

```
users(filter: {fullname_EQ: "John Smith"}) {
  fullname
  department
  job_title
}
```

- Fetch the unified users of a user by full name:

```
users(filter: {fullname_EQ: "John Smith"}]) {
  unifiedusers {
    users {
     fullname
     department
     job_title
    }
  }
}
```

- Fetch the unified users of multiple users by name:

```
users(filter: {fullname_IN: ["John Smith", "Jane Smith"]}) {
  unifiedusers {
    users {
     fullname
     department
     job_title
    }
  }
}
```

# Troubleshooting

## Cannot import objects with \_key or external_id

Car model supports two types of collections: naturally keyed collections and non-naturally keyed collections.
For naturally keyed collections, collector has to provide the value of \_key.
For non-naturally keyed collections, collector has to provide value of external_id.
\_key and external_id cannot be both put in the same import object.

For detail of type of objects please reference [Data Model](#Data-stored-in-CAR)
