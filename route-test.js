var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world!');
});
app.get('/customer', function(req, res){
    res.send('customer page');
});
app.get('/admin', function(req, res){
    res.send('admin page');
});
app.get('/hyq',function (req,res) {
    res.send('hyq');
});

app.listen(3000);