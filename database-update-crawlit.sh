#!/bin/bash

echo "============================================="
echo "Database update with Crawlit's datas"
echo "============================================="

mongo dofapi --eval "db.dropDatabase()"

mongoimport --db dofapi --collection Equipment --file ../crawlit/data/dofus/allequipments.json --jsonArray
mongoimport --db dofapi --collection Weapon --file ../crawlit/data/dofus/allweapons.json --jsonArray
mongoimport --db dofapi --collection Set --file ../crawlit/data/dofus/set.json --jsonArray
mongoimport --db dofapi --collection Pet --file ../crawlit/data/dofus/pet.json --jsonArray
mongoimport --db dofapi --collection Mount --file ../crawlit/data/dofus/mount.json --jsonArray
mongoimport --db dofapi --collection Resource --file ../crawlit/data/dofus/resource.json --jsonArray
mongoimport --db dofapi --collection Consumable --file ../crawlit/data/dofus/consumable.json --jsonArray
mongoimport --db dofapi --collection Monster --file ../crawlit/data/dofus/monster.json --jsonArray
mongoimport --db dofapi --collection Profession --file ../crawlit/data/dofus/profession.json --jsonArray
mongoimport --db dofapi --collection Harness --file ../crawlit/data/dofus/harness.json --jsonArray
mongoimport --db dofapi --collection Classe --file ../crawlit/data/dofus/classe.json --jsonArray
mongoimport --db dofapi --collection Idol --file ../crawlit/data/dofus/idol.json --jsonArray
mongoimport --db dofapi --collection Havenbag --file ../crawlit/data/dofus/havenbag.json --jsonArray