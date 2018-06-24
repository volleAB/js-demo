var imglist = [];
var oi = $('.img');

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
				resolve(res.showapi_res_body);
			}
		})
	})
}

const jsonData = {
	"showapi_appid": '66637', 
	"showapi_sign": '7D57FEE438600A681F51A0D35D7CC3B5', 
	"topid": 4
}

const firstAjax = promise('post', 'http://route.showapi.com/213-4', jsonData)
	firstAjax.then((res) => {
		console.log(res.pagebean.songlist, res.pagebean.songlist[0]);
		oi.src = res.pagebean.songlist[0].albumpic_big;
		console.log(oi.src)
	})