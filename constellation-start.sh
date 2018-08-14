#!/bin/bash
set -u
set -e


./constellation-init.sh
CMD="constellation-node --url=https://"$ip":9001/ --port=9001 --workdir=$DDIR --socket=tm.ipc --publickeys=tm.pub --privatekeys=tm.key --othernodes=https://"$node_1":9001/"
echo "$CMD >> qdata/logs/constellation.log 2>&1 &"
$CMD >> "qdata/logs/constellation.log" 2>&1 &


DOWN=true
while $DOWN; do
    sleep 0.1
    DOWN=false
    
    
    if [ ! -S "qdata/c/tm.ipc" ]; then
            DOWN=true
    fi
    
done

