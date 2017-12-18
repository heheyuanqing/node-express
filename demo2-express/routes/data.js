var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/',function(req,res,next){
    var name = req.query.name;
    console.log(name);
    res.send(name);
    // var url = req.path;
    // console.log(req);
  /*console.log(name);
    if(!url){
        return res.send({
            status:0,
            info:'提交字段不全'
        });
    }
    else{
        var filePath = '/public/data/studentsInformations.json';
        fs.readFile(filePath,function(err,data){
            if(err){
                return res.send({
                    status:0,
                    info:'查询文件失败'
                })
            }
            else{
                console.log("success ");
            }
        });
    // }*/


});

module.exports = router;