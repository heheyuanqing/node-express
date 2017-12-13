var http = require('http');

http.createServer(function (req,res) {
    res.writeHeader(200,{'Content-type':'text/html'});
    res.write('');
    res.end('<p>Create basic HTTP Server Response to clients to request</p>');
}).listen(6868);
