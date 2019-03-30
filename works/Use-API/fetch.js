fetch('http://59.68.29.67:8000/api/plant',{
	method: 'GET'
	}) 
  .then((res)=>{
    return res.text() // res.text()是一个Promise对象
  })
  .then((res)=>{
    console.log(res.result) // res是最终的结果
  })

/*
//原生ajax
const ajax = (method, url, data) => {
    return new Promise((resolve, reject) => {
        let xmlhttp = new XMLhttpRequest()
        xmlhttp.open('GET', url)
        xmlhttp.send()  //如果是post，用send发送请求参数
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.statu ==200) {
                console.log(xmlhttp.responseText)
                resolve(xmlhttp.responseText)
            }
        }
    })
}

let ajax1 = ajax('GET', '***', '')
ajax1.then(res => {
    console.log(res)
})*/