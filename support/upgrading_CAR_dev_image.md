
When developing CAR service we often modify Postgres and Hasura schemas of CAR data.
That means that a fresh CAR image installed on top of existing Postgres data will often cause unpredictable issues and errors.
To avoid that please reset CAR data every time when adopting fresh CAR image.
The following bash code is a correct way of resetting CAR data after adopting fresh CAR image:

```
PODNAME=`kubectl get pods --selector=name=car --output=jsonpath={.items..metadata.name} | python -c "import sys; print sys.stdin.read().split(' ')[0]";`
oc exec -it $PODNAME -- node build/app.js -c resetPostgres
oc delete po -lname=car
```


