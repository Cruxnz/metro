Squid is a forward proxy supporting HTTP, HTTPS, FTP, and more. We want to set it up as an "explicit" proxy, like what is detailed here https://wiki.alpinelinux.org/wiki/Setting_up_Explicit_Squid_Proxy.

# Instally locally on Mac

1. `brew install squid`. It should be located at `/usr/local/sbin/squid`, and the config file will be at `/usr/local/etc/squid.conf`.

2. Change the config file to the one in this repo, at `docs/squid.conf`.

3. `/usr/local/sbin/squid -k parse` to check the config, and `/usr/local/sbin/squid` to run Squid.

