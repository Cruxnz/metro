#!/bin/bash
app="metro.server"
docker build -t ${app} .
docker run -d -p 5000:80 \
  --name=${app} \
  -v $PWD:/backend/MetroServer/app ${app}
