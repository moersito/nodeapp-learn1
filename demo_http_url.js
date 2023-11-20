/**
 * If you have followed the same steps on your computer, 
 * you should see two different results when opening these two addresses:
   --- (1)
   http://localhost:8080/summer
   Will produce this result:
   /summer
   ---
   --- (2)
   Will produce this result:
   /winter
   ---
 */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8081);