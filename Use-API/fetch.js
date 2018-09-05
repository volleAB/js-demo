fetch('http://59.68.29.67:8000/api/plant',{
	method: 'GET'
	}) 
  .then((res)=>{
    return res.text() // res.text()是一个Promise对象
  })
  .then((res)=>{
    console.log(res.result) // res是最终的结果
  })