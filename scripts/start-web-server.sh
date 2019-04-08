#!/bin/bash
docker stop metro.server
docker rm metro.server
app="metro.server"
docker build -t ${app} ~/code/metro/backend/web
docker run -d -p 56733:80 -e DBUSER=metro -e DBPASS=password -e DBHOST=host.docker.internal -e DBNAME=metro_db \
  --name=${app} \
  -v ~/code/metro/backend/web:/app ${app}

