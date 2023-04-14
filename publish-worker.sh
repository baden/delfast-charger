#!/bin/sh

SERVER_IP=91.107.231.166
SERVER_USER=baden

SERVER_PATH=/home/$SERVER_USER/delfast-charger/web

#ssh $SERVER_USER@${SERVER_IP} "mkdir -p $SERVER_PATH"
#rsync -a --delete -e ssh --exclude "node_modules" ./worker/ root@${SERVER_IP}:$SERVER_PATH

pushd worker/client
npm install
npm run build
popd
ssh $SERVER_USER@${SERVER_IP} "mkdir -p $SERVER_PATH"
rsync -a --delete -e ssh ./worker/client/build/ root@${SERVER_IP}:$SERVER_PATH
