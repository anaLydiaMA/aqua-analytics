var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(process.env.TEST_VARIABLE);
}).listen(8080);

//run server with node bin/dev
