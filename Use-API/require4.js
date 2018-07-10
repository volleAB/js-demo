var PageList = [];
var oList = $('.list');
var oTitle = $('.title');

const promise = (method, url, data) => {
    return new Promise((reslove,reject) => {
        $.ajax({
            type: method,
            url,
            // dataType:'jsonp',
            dataType: 'json',
            data,
            // jsonp:'callback',//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
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

var getMyData = promise('get', 'http://localhost:8070/page', '')
    .then((res) => {
        console.log(res)
    })

