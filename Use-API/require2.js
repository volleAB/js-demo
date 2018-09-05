// var pageList = [];
// var oi = $('.img');
// var text = $('.div1');
// var text2 = document.getElementsByTagName('div')[0];

const promise = (method, url, data) => {
	return new Promise((resolve, rej) => {
		$.ajax({
			type: method,
			url,
			// dataType: "json",
			dataType: "jsonp",
			data,
			jsonp:'callback',
			error: function(XmlHttpRequest, textStatus, errorThrown) {
				alert("操作失败!");
			},
			success: (res) => {
				resolve(res);
			}
		});
	});
}

const jsonData = {
	start: 20,
	cout: 20
};

const firstAjax = promise('get', 'https://api.douban.com/v2/movie/top250', jsonData)
firstAjax.then((res) => {
	console.log(res);
}).catch((err) => {
	console.log(err);
})