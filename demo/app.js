var express = require("express");
var app = express();

app.use(express.static('public'));
app.use(express.static('view'));

app.get('/',function (req,res) {
    res.sendFile(__dirname,"/"+"index.html");
});
app.get('/style',function (req,res) {
   res.sendFile(__dirname,"/style.css");
});

app.listen(3000);