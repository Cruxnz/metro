# Set up Metro Server (Mac)

1. Make sure Docker is installed. Run `./start.sh` in `scripts`.

2. Make sure Postgres is installed with `brew install postgresql`.

3. Start Postgres and enable it on startup with `pg_ctl -D /usr/local/var/postgres start && brew services start postgresql`.

4. Start a postgres shell with `psql postgres`.

5. Create a user with `CREATE ROLE metro WITH LOGIN PASSWORD 'password';`.

6. Create a database with `CREATE DATABASE metro_db;`.

7. Grant privileges to the user `GRANT ALL PRIVILEGES ON DATABASE metro_db TO metro`.
