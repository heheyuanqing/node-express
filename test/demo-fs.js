var fs = require("fs");
var path = 'information.json';
fs.readFile(path,{ecoding:'UTF8'},function (err,data) {
    if (err){
        console.log("文件打开失败");
    }
    else{
        console.log(data.toString().);
    }
});