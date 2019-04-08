# Production DB

The production DB is a droplet in Singapore with private networking, so the web server (which is also in Singapore and has private networking) can access it.

`sudo -i -u postgres` to start a bash shell as the postgres user.

`psql` to start a postgres shell, where SQL commands and such can be entered.
