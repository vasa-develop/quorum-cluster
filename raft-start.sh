#!/bin/bash
set -u
set -e

mkdir -p qdata/logs
echo "[*] Starting Constellation nodes"
./constellation-start.sh

echo "[*] Starting Ethereum nodes"
set -v
ARGS="--nodiscover --raft --rpc --rpcaddr 0.0.0.0 --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3,quorum --emitcheckpoints"
PRIVATE_CONFIG=qdata/c/tm.ipc nohup geth --datadir qdata/dd $ARGS --permissioned --raftport 50401 --rpcport 22000 --port 21000 --rpccorsdomain '*' --unlock 0 --password passwords.txt 2>>qdata/logs/1.log &

set +v

echo
echo "All nodes configured. See 'qdata/logs' for logs, and run e.g. geth attach qdata/dd/geth.ipc to attach to the first Geth node."
echo "To test sending a private transaction, run './runscript.sh script1.js'"
