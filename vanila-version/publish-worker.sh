#!/bin/sh

SERVER_IP=`hcloud server ip delfast-charger`
SERVER_USER=baden

SERVER_PATH=/home/$SERVER_USER/delfast-charger/web

#ssh $SERVER_USER@${SERVER_IP} "mkdir -p $SERVER_PATH"
#rsync -a --delete -e ssh --exclude "node_modules" ./worker/ root@${SERVER_IP}:$SERVER_PATH

npm install
npm run build
npm run build-sw
ssh $SERVER_USER@${SERVER_IP} "mkdir -p $SERVER_PATH"
rsync -a --delete -e ssh ./dist/ root@${SERVER_IP}:$SERVER_PATH
