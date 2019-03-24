/* global chrome */

chrome.runtime.onInstalled.addListener(() => {
  console.log('installed')
  var config = {
    mode: 'fixed_servers',
    rules: {
      proxyForHttp: {
        host: '127.0.0.1',
        port: 3128
      },
      proxyForHttps: {
        host: '127.0.0.1',
        port: 3128
      }
    }
  }

  chrome.proxy.settings.set(
    { value: config, scope: 'regular' },
    function () {}
  )
})
