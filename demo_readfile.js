/**
 * The Node.js file system module allows you 
 * to work with the file system on your computer.
   To include the File System module, use the require() method as an example below,
   var fs = require('fs');

   Read Files
   The fs.readFile() method is used to read files on your computer.
 */
   var http = require('http');
   var fs = require('fs');
   http.createServer(function (req, res) {
     fs.readFile('demofile1.html', function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write(data);
       return res.end();
     });
   }).listen(8085);

