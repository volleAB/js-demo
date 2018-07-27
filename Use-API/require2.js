// var pageList = [];
// var oi = $('.img');
// var text = $('.div1');
var text2 = document.getElementsByTagName('div')[0];

const promise = (method, url, data) => {
	return new Promise((resolve, rej) => {
		$.ajax({
			type: method,
			url,
			dataType: "json",
			data,
			error: function(XmlHttpRequest, textStatus, errorThrown) {
				alert("操作失败!");
			},
			success: (res) => {
				resolve(res);
			}
		});
	});
}

const jsonData = '';

const firstAjax = promise('get', 'http://result.eolinker.com/RUkKcGwf7e0080fef9236d792f9d5d2a0f8b8961a9837b1?uri=/home', jsonData)
firstAjax.then((res) => {
	// let link = res.image;
	// let img = new Image();
	// img.onload=function(){alert("img is loaded")};  
    // img.onerror=function(){alert("error!")};
    // img.src=link;
    // oi.src = link;
	// text.html(res.ans、wer);
	// oi.src = link;	//todo
	console.log(res);
});