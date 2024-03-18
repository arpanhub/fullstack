var http = require('http'); 
var url = require('url'); 
var fs = require('fs'); 
const { error } = require('console');
http.createServer(function (req, res) { 
  var q = url.parse(req.url, true); 
  var filename = "." + q.pathname; 
  fs.readFile(filename, function(error, data) { 
    if (error) { 
      res.writeHead(404, {'Content-Type': 'text/html'}); 
      return res.end("404 Page Not Found");}  
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write(data); 
    return res.end();
  }); 
}).listen(8080); 
console.log("Server is Running at \\localhost:8080")


/* 

var url = require('url'); 
var adr = 'http://localhost:8080/default.htm?year=2024&month=March'; 
var q = url.parse(adr, true); 
console.log("Protocol:",q.protocol); 
console.log("Hostname:",q.host);  
console.log("Pathname:",q.pathname);  
console.log("Search:",q.search);  
var qdata = q.query;  
console.log("Month:",qdata.month);
 */
