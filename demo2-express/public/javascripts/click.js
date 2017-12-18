window.onload = function (){
    // var result = documemt.getElementById("result");
    var btn = document.getElementById("btn");

    btn.addEventListener('click', function () {

        var name = document.getElementById("name").value;
        $.ajax({
            url: '/data',
            method: 'GET',
            data:{
                name:name
            },
            dataType:'jsonp',
            success:function(data){
                console.log(data);
            }
        });
    /*    var xhr;
        var url = '/data'+'?name='+name;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var infor = xhr.responseText;
                console.log(infor);
            }

        };
        xhr.open("GET",url,true);
        xhr.send();*/
    },false);
};