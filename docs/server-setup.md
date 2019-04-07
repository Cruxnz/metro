# VPN research

https://www.digitalocean.com/community/tutorials/how-to-set-up-an-openvpn-server-on-ubuntu-18-04 basic setup of an openvpn server on ubuntu 18.04.

We set up the CA on the same machine as the VPN. Although this is not best practice security-wise, we need to automate the certificate generation and the VPN will need access to the CA anyway.

`sudo systemctl stop openvpn@server`



