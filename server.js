//const http = require('http');
//function rqListener(req, res){

//}
//http.createServer(rqListener);


//const http = require('http');
//http.createServer(function(req, res){

//})

const http = require('http');
const server = http.createServer((req, res) =>{
    console.log(req);
    res.write('<html><body><p>Jayeeta Mondal</p></body></html>');
    res.end();
});
server.listen(4000);
console.log("Jayeeta Mondal");