var http = require('http');
var option = {
    hostname: 'localhost',
    port: 6868,
    path: '/',
    method: 'POST'
};

var req = http.request(option,function (res) {
    res.setEncoding('utf8');
    res.on('data',function (chunk) {
        console.log('BODY:'+chunk);
    })
});
req.on('error',function (e) {
    console.log('problem with request : '+e.message);
});
req.write('data\n');
req.end();
