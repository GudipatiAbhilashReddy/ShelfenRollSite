// var http = require('http');  
// var url = require('url');  
// var fs = require('fs');  
// var server = http.createServer(function(request, response) {  
//     var path = url.parse(request.url).pathname;  
//     switch (path) {  
//         case '/':  
//             response.writeHead(200, {  
//                 'Content-Type': 'text/plain'  
//             });  
//             response.write("This is Test Message.");  
//             response.end();  
//             break;  
//         case '/index.html':  
//             fs.readFile(__dirname + path, function(error, data) {  
//                 if (error) {  
//                     response.writeHead(404);  
//                     response.write(error);  
//                     response.end();  
//                 } else {  
//                     response.writeHead(200, {  
//                         'Content-Type': 'text/html'  
//                     });  
//                     response.write(data);  
//                     response.end();  
//                 }  
//             });  
//             break; 
//         default:  
//             response.writeHead(404);  
//             response.write("opps this doesn't exist - 404");  
//             response.end();  
//             break;  
//     }  
// });  
// server.listen(4002); 




// var http = require('http'); 
// var server = http.createServer(function (req, res) {   
//     if (req.url == '/') { 
       
//         res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
       
//         res.sendFile('/index.html');      
//           res.end();
    
//     }
 
   
//     else
//         res.end('Invalid Request!');

// });

// server.listen(4002); 

// console.log('Node.js web server at port 4002 is running..')



var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.sendFile('/index.html');
});
app.listen(4002);