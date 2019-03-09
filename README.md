An open source VPN.

Splash page at http://metro-vpn.com/.

# Folder structure

The basic infrastructure is Nginx running on a Digital Ocean droplet running Ubuntu 18.04.

Nginx config file at `/etc/nginx/nginx.conf`.

Static files at `/var/www/html`.

Scripts are using `scp` to deploy to the DO droplet.
