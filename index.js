var http = require('http');
var url = require('url');

var counter=0;

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  if (request.method === 'GET' && parsedUrl.pathname === '/hello'){
    response.end((parsedUrl.query.a + ' ' + parsedUrl.query.b).toString());
  } else {
    counter++;
    response.end(counter.toString());
  }
});

server.listen(3000);
