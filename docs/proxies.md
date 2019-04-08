# Key technical terms

Forward proxy - a proxy that sits on top of a client, making outgoing requests to (probably public) networks. It can hide a client's location from servers the client requests through it (but not its own location). Examples: Squid, Tinyproxy.

Reverse proxy - a proxy that sits on top of a server, making internal requests to (probably private) networks. It can act as a load balancer and mainly acts to protect and optimise server responses. It can hide a server's location from clients that request the server through it (but not its own location). Examples: HAProxy, Nginx.

Note that sometimes reverse proxies can act as forward proxies, and vice versa. For example, Nginx can act as a forward proxy if configured a certain way. Confusing, I know. But for the most part, each type of proxy has a distinct purpose, and different software should be used for each. Also, note that both proxies may or may not cache requests, depending on software and configuration.

Transparent proxy - A weird term. A transparent proxy is defined in some places as "a proxy that doesn't modify requests" but its main purpose seems to be censorship and filtering of web requests from unaware clients, as well as caching requests. For example, a university could put a transparent proxy in place that filters out gaming websites. "Transparent" in this case means "invisible" as the client doesn't normally know the proxy even exists, and will be forced to use the proxy if they are on the proxy's network.

Explicit proxy - this is what we have set up with the Chrome extension. The client will choose to send certain traffic (eg. HTTP/S) through the explicit proxy, and any requests that the server receives will appear to have been made from the proxy, as with the transparent proxy. Organisations (like the hypothetical university) may choose to use an explicit proxy instead of a transparent one, but this is probably not the best idea as the client has to configure everything, and the client could probably just reconfigure their settings not to use the proxy (which sucks if you want to enforce the proxy).

The purpose of using an explicit proxy in our case is to give control to the client - the client trusts our proxy. We don't log or restrict requests, so the client is not impaired by use of our proxy. There may be a speed cost for using the proxy (the requests have to go through an extra network) but this is a tradeoff for the security/anonymity benefits, and is mitigated by caching. Our proxy could be used to get around network restrictions (eg. from a transparent proxy).

CONNECT method - The CONNECT method is used to "tunnel" the TCP connection through the proxy to the server. Once this connection has been established, the proxy can forward traffic through it (importantly, HTTPS traffic). https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT

SSL interception - the proxy spoofs a certificate that is presented to the client, and can intercept and read any https traffic as well as change it.
