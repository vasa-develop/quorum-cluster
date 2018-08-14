#!/bin/bash
set -u
set -e

DDIR="qdata/c"
mkdir -p $DDIR
mkdir -p qdata/logs
#cp "keys/tm1.pub" "$DDIR/tm.pub"
#cp "keys/tm1.key" "$DDIR/tm.key"
rm -f "$DDIR/tm.ipc"
