#!/bin/bash
set -u
set -e

echo '[
  "enode://ac6b1096ca56b9f6d004b779ae3728bf83f8e22453404cc3cef16a3d9b96608bc67c4b30db88e0a5a6c6390213f7acbe1153ff6d23ce57380104288ae19373ef@'$node_1':21000?discport=0&raftport=50401"
]' > permissioned-nodes.json

echo "[*] Cleaning up temporary data directories"
#rm -rf qdata
#mkdir -p qdata/logs


echo "[*] Configuring permissioned node"
#mkdir -p qdata/dd/{keystore,geth}
#cp permissioned-nodes.json qdata/dd/static-nodes.json
#cp permissioned-nodes.json qdata/dd/
#cp keys/key$key qdata/dd/keystore
#cp raft/nodekey$key qdata/dd/geth/nodekey
geth --datadir qdata/dd init genesis.json


