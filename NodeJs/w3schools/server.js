let http = require('http');
let url =  require ('url');
http.createServer((req, res) => {
    let qString  = url.parse(req.url).query;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(qString ? qString : 'no query string found.');
    res.end();
}).listen('8080');