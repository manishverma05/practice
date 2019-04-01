let http = require('http');
let fs = require('fs');
http.createServer((req, res) => {
    fs.appendFile('sites.xml', 'hello test', (err) => {
        if (err) throw err;
        console.log('Saved!');
    });
    
    fs.readFile('sites.xml',(err,data) => {
        res.write(data);
        res.end();
        console.log(data);
    });
}).listen('8080');