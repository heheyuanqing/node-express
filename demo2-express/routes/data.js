var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function (req, res, next) {
    var name = req.query.name;
    var url = req.url;
    var callback = req.query.callback;
    var filepath = __dirname + '/../public/data/data.json';
    if (!name || !url) {
        return res.send({
            status: 0,
            info: '提交字段不全'
        });
    }
    else {
        fs.readFile(filepath, function (err, data) {
            if (err) {
                return res.send({
                    status: 0,
                    info: '查询文件失败'
                })
            }
            else {
                console.log("open file success");
                data = data.toString();
                data = JSON.parse(data).infor;
                for (var i = 0; i < data.length; i++) {
                    if (name === data[i].name) {
                        return res.send(callback+"("+" {\n" +
                            "                            \"name\": \""+data[i].name+"\",\n" +
                            "                            \"sex\": \""+data[i].sex+"\",\n" +
                            "                            \"professional\":\""+ data[i].professional+"\",\n" +
                            "                            \"class\":\""+ data[i].class+"\",\n" +
                            "                            \"number\": \""+data[i].number+"\"\n" +
                            "                        }"+")");

                    }
                }
            }
        });


    }


});

module.exports = router;