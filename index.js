var http = require('http');
const PORT = process.env.PORT || 5000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! Updated secret keys 2');
}).listen(PORT);