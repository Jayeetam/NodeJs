var http = require('http'); 

var server = http.createServer((req, res) => { 
    if (req.url == '/home') { 
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>Welcome home</p></body></html>');
        res.end();
    }
    else if (req.url == "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p> Welcome to About Us page </p></body></html>');
        res.end();
    }
    else if (req.url == "/node") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p> Welcome to my Node Js project</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
    });

server.listen(5000); 
