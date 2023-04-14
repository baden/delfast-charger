#!/bin/sh

SERVER_NAME=delfast-charger
SERVER_TYPE=cx11
SERVER_LOCATION=nbg1
SERVER_SSH_KEY=hcloud-provision-key
SERVER_CONFIG=hetzner-cloud-config.yaml

hcloud server create \
    --name $SERVER_NAME \
    --image ubuntu-20.04 \
    --type $SERVER_TYPE \
    --location $SERVER_LOCATION \
    --ssh-key $SERVER_SSH_KEY \
    --user-data-from-file $SERVER_CONFIG
