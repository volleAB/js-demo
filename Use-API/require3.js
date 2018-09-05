var imglist = [];
var o = document.getElementsByTagName('img')[0];
// var in = $('input');

const promise = (method, url, data) => {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: method,
			url,
			dataType: 'json',
			data,
			error: function(XmlHttpRequest, textStatus, errorThrown) {
				alert("操作失败!");
			},
			success: (res) => {
				resolve(res);
			}
		})
	})
}

// http://gzc.scuec.edu.cn/ReturnContent/GetContentList?keywords=%E9%87%87%E8%B4%AD%E5%85%AC%E5%91%8A&start=0&num=10
const getPic = promise('get', 'http://59.68.29.67:8000/api/plant', '')
	getPic.then((res) => {
		console.log(res)
	})