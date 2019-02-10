var http = require("http");

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end('<html><heade></heade><body> <p>This is a paragraph.</p> </body></html>'
    );

}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');