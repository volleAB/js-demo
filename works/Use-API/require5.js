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

let data = {

}

let myRequire = promise('http://59.68.29.67:8000/api/uploadFile', 'POST', '')
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })