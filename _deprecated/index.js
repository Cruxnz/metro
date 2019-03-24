const http = require('http')

const httpProxy = require('http-proxy')

httpProxy.createProxyServer({ target: 'http://rwbuilders.co.nz' }).listen(8000) // See (†)

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2))
//   res.end()
// }).listen(9000)
