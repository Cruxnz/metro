app="metro.server"
docker build -t ${app} -f ~/code/metro/backend/web/prod.Dockerfile ~/code/metro/backend/web

docker tag ${app} metrovpn/web-server:latest
docker push metrovpn/web-server:latest

ssh -i ~/.ssh/crux root@metro-vpn.com 'docker-compose down && docker-compose pull && docker-compose up -d'
