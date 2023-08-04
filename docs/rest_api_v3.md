**An api key and password is required to connect to the api.** It will be available in apikey management page ([httpss://connect.security.ibm.com/apikey](httpss://connect.security.ibm.com/apikey)) in XFE application. The apikey and password need to be encoded by base64 and then passed in with api call as https header, for example:

```
-H 'Authorization: Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImE2N2E0Nzg0In0'
```

**An authorization header similar to above needs to be added to all curl command examples given below.**


### `/api/car/v3/health`

Role: User

GET get the status of CAR service

```
curl https://<Path of the API>/api/car/v3/health
```

Response:

Status Code: 200

```
{"message":"ok"}
```

### `/api/car/v3/health/all`

Role: User

GET get the status of CAR service and underlying services

```
curl https://<Path of the API>/api/car/v3/health/all
```

Response:

Status Code: 200

```
{"status":200,"hasura":{"status":200,"message":"OK"},"postgres":{"message":"OK"},"redis":{"status":200,"message":"OK"}}
```

### `/api/car/v3/hasuraAuth`

Role: Hasura service

GET This endpoint is only callable by Hasura service

### `/api/car/v3/query`

Role: User

POST send a GraphQL query to CAR service

```
curl -H "Content-Type: application/json" -X POST  https://<Path of the API>/api/car/v3/query -d '{"query":"query { asset(where: {name: {_eq: \"Asset1\"}}) {  risk  }}"}'
```

Response:

Status Code: 200

```
{"data":{"asset":[{"risk": 8}]}}
```

### `/api/car/v3/resetPostgresToken`

Role: User

GET is used for generating "resetPostgres" token. A generated token is valid for 1 minute.

```
curl https://<Path of the API>/api/car/v3/resetPostgresToken
```

Response:

Status Code: 200

```
1622481193204
```
### `/api/car/v3/resetPostgres`

Role: Admin

POST is used for removing all CAR data and metadata from underlying PostgresQL database.

```
curl -X POST  https://<Path of the API>/api/car/v3/resetPostgres/?token=1622481193204
```

Response:

Status Code: 200

### `/api/car/v3/clearDbToken`

Role: User

GET is used for generating "clearDb" token. A generated token is valid for 1 minute.

```
curl https://<Path of the API>/api/car/v3/clearDbToken
```

Response:

Status Code: 200

```
1622481193204
```
### `/api/car/v3/clearDb`

Role: Admin

POST is used for deleting CAR data for specific account. The account is identified by authenticated user sending the request.

```
curl -X POST  https://<Path of the API>/api/car/v3/clearDb/?token=1622481193204
```

Response:

Status Code: 200
### `/api/car/v3/DataRetentionPolicy`

Role: User

GET is used for getting current data retention policy

```
curl https://<Path of the API>/api/car/v3/DataRetentionPolicy
```

Response:

Status Code: 200

```
{"policy_name": "DiskUsage", "policy_value": 3000000}
```
POST is used for setting data retention policy

```
curl -X POST https://<Path of the API>/api/car/v3/DataRetentionPolicy -d '{"policy_name": "DiskUsage", "policy_value": 3000000}'
```

Allowed values for "policy_name" field:
 - "Time": used for setting "based on time" data retention policy. "policy_value" in this case is the number of days being kept in the history. policy_value = 30 for example means that historical records older than 30 days will be deleted.
- "DiskUsage": used for setting "based on disk usage" data retention policy. "policy_value" in this case is the number of bytes. policy_value = 3000000 for example means that oldest historical records will be deleted to keep disk usage for given account at around "3 megabytes" level.

Response:

Status Code: 200

### `/api/car/v3/carSchema`

Role: User

GET is used to get all or a specific car schema extension(s).

```
curl -X GET  https://<Path of the API>/api/car/v3/carSchema or curl -X GET  https://<Path of the API>/api/car/v3/carSchema/<key>
```

Response:

Status Code: 200


POST is used to create or update a car schema extension.

```
curl -X POST  https://<Path of the API>/api/car/v3/carSchema -d '{"key": "08ade7a3-b449-4821-bfc4-4d923e8bc6f9", "owner": "atp", "version": "7", "schema": <JSON Schema Object>}
```

Response:

Status Code: 201

DELETE is used to delete a car schema extension.

```
curl -X DELETE  https://<Path of the API>/api/car/v3/carSchema/<key>
```

Response:

Status Code: 204
