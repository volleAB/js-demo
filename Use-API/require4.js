var PageList = [];
var oList = $('.list');
var oTitle = $('.title');

const promise = (method, url, data) => {
    return new Promise((reslove,reject) => {
        $.ajax({
            type: method,
            url,
            dataType:'jsonp',
            // dataType: 'json',
            data,
            jsonp:'callback',//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            error: function(XmlHttpRequest, textStatus, errorThrown) {
                console.log(textStatus)
				alert("操作失败!");
            },
            success: function (res) {
                reslove(res);
            }
        })
    })
}

// const data = {
//     "apikey": "0b2bdeda43b5688921839c8ecb20399bt",
// }

// https://api.douban.com/v2/movie/in_theaters

var getMyData = promise('get', 'http://59.68.29.67:8000/api/plant', '')
    .then((res) => {
        console.log(res)
    })