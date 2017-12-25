/*
* 使用jquery.ajax向服务端发送请求
* 使用ajax发送请求
* */
window.onload = function (){
    var btn = document.getElementById("btn");

    btn.addEventListener('click', function () {
        var name = document.getElementById("name").value;
        $.ajax({
            url: 'http://localhost:3000/data/',
            method: 'GET',
            data:{
                name:name
            },
            dataType:'jsonp',
            jsonp:'callback',
            jsonpCallback:'student',
            success:function(data){
                searchResult(data)
            }
        });

     /*   var xhr;
        var url = 'http://localhost:3000/data/'+'?name='+name;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var infor = xhr.responseText;
                searchResult(infor);
            }

        };
        xhr.open("GET",url,true);
        xhr.send();*/
    },false);

    function searchResult(data) {
        var result = document.getElementById('result');
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var name = document.createElement('td');
        var sex = document.createElement('td');
        var pro = document.createElement('td');
        var cls = document.createElement('td');
        var num = document.createElement('td');


        result.appendChild(table);
        table.appendChild(tbody);
        tbody.appendChild(tr);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(pro);
        tr.appendChild(cls);
        tr.appendChild(num);



        name.innerHTML = data.name;
        sex.innerText = data.sex;
        pro.innerText = data.professional;
        cls.innerText = data.class;
        num.innerText = data.number;

        table.style.border="solid 2px black";
        table.style.margin = "0 auto";
        name.style.width="50px";
        sex.style.width="50px";
        pro.style.width="50px";
        cls.style.width="50px";
        num.style.width="50px";


    }

};