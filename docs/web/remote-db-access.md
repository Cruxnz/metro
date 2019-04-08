# Production DB

The production DB is a droplet in Singapore with private networking, so the web server (which is also in Singapore and has private networking) can access it.

`sudo -i -u postgres` to start a bash shell as the postgres user.

`psql -d metro_db` to start a postgres shell, where SQL commands and such can be entered.


# Setup for flask application

The flask application has a DB user that needs remote access to the postgres server.

Ensure the firewall allows connections to port 5432 - `ufw allow 5432`.

`nano /etc/postgresql/10/main/postgresql.conf` and find connection settings. Add `listen_addresses = '*'`.

`nano /etc/postgresql/10/main/pg_hba.conf` and add the private network that you'd like to allow.

eg. `host all all 10.130.0.0/16 md5` to allow all 10.130.x.x connections, or replace the ip part with `0.0.0.0/0` for all connections. I have added `10.130.0.0/16` as the metro web server currently has a private ip address of 10.130.6.244 (this is subject to change if we create a new droplet, but should still be in the same private network).

`service postgresql restart` to update.

Follow the same steps specified in `local-server-setup.md` except that the Docker container should already be running on the web server via the deploy script, so the start script isn't relevant. `docker exec -it` into this container and use the same Python commands to create the tables.
