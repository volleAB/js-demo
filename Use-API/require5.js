const promise = (url, method, data) => {
    return new Promise ((resolve, reject) => {
        $.ajax({
            type: method,
            url,
            dataType: "json",
            data,
            error: function(XmlHttpRequest, textStatus, errorThrown) {
                alert("操作失败!");
            },
            success: (res) => {
                resolve(res)
            }
        })
    })
}

let myRequire = promise('http://199win.xyz:8000/update/hide', 'POST', '')
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })