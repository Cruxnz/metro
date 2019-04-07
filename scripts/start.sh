#!/bin/bash
docker stop metro.server
docker rm metro.server
app="metro.server"
docker build -t ${app} ./backend/MetroServer
docker run -d -p 56733:80 \
  --name=${app} \
  -v $PWD/backend/MetroServer:/app ${app}
