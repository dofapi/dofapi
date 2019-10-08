#!/bin/bash

echo "============================================="
echo "Database update with Crawlit's datas"
echo "============================================="

mongo dofapitouch --eval "db.dropDatabase()"

mongoimport --db dofapitouch --collection Equipment --file ../crawlit/data/dofus-touch/allequipments.json --jsonArray
mongoimport --db dofapitouch --collection Weapon --file ../crawlit/data/dofus-touch/allweapons.json --jsonArray
mongoimport --db dofapitouch --collection Set --file ../crawlit/data/dofus-touch/set.json --jsonArray
mongoimport --db dofapitouch --collection Pet --file ../crawlit/data/dofus-touch/pet.json --jsonArray
mongoimport --db dofapitouch --collection Mount --file ../crawlit/data/dofus-touch/mount.json --jsonArray
mongoimport --db dofapitouch --collection Resource --file ../crawlit/data/dofus-touch/resource.json --jsonArray
mongoimport --db dofapitouch --collection Consumable --file ../crawlit/data/dofus-touch/consumable.json --jsonArray
mongoimport --db dofapitouch --collection Monster --file ../crawlit/data/dofus-touch/monster.json --jsonArray
mongoimport --db dofapitouch --collection Profession --file ../crawlit/data/dofus-touch/profession.json --jsonArray
mongoimport --db dofapitouch --collection Classe --file ../crawlit/data/dofus-touch/classe.json --jsonArray
