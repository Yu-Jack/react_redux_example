const http = require('http');

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('Hello I\'m Server ');
}).listen(3000);
