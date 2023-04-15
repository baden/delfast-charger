#!/bin/sh

SERVER_IP=91.107.231.166
SERVER_USER=root

ssh $SERVER_USER@${SERVER_IP} "mkdir -p /var/log/nginx/delfast-charger/"
ssh $SERVER_USER@${SERVER_IP} "chown -R root:adm /var/log/nginx/delfast-charger"
scp etc/charger-nginx $SERVER_USER@${SERVER_IP}:/etc/nginx/sites-available/charger-nginx
ssh $SERVER_USER@${SERVER_IP} "ln -s /etc/nginx/sites-available/charger-nginx /etc/nginx/sites-enabled/charger-nginx"
ssh $SERVER_USER@${SERVER_IP} "nginx -t" && \
ssh $SERVER_USER@${SERVER_IP} "systemctl restart nginx"
