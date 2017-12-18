var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/',function(req,res,next){
    var name = req.query.name;
    var url = req.url;
    if(!name||!url){
        return res.send({
            status:0,
            info:'提交字段不全'
        });
    }
    else{
        var filePath = __dirname+'studentInformations.json';
        fs.readFile(filePath,function(err,data){
            if(err){
                return res.send({
                    status:0,
                    info:'查询文件失败'
                })
            }
            else{
                console.log("success");
                for(var i=0;i<data.length;i++){
                    if(name === data[i].name){
                        res.send(data[i]);
                    }
                }
            }
        });
     }


});

module.exports = router;