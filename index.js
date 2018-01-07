var http = require('http');
var serveStaticFiles = require('ecstatic')({ root: __dirname + '/public' });
var port = process.env.PORT || 8000;

http.createServer(function (req, res) {
    if (req.url.indexOf('/ads') === 0) {
        return require('./src/server/handle-ads')(req, res);
    }

    if (req.url.indexOf('/delay') === 0) {
      return require('./src/server/handle-delay')(req, res);
    }


    // default: handle the request as a static file
    serveStaticFiles(req, res);
}).listen(port);

console.log('Listening on http://localhost:%d', port);
