var pageList = [];
var oi = $('.img');
var text = $('.div1');
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

const firstAjax = promise('get', 'https://yesno.wtf/api', jsonData)
firstAjax.then((res) => {
	let link = res.image;
	let img = new Image();
	img.onload=function(){alert("img is loaded")};  
    img.onerror=function(){alert("error!")};
    img.src=link;
    oi.src = link;
	text.html(res.answer);
	// oi.src = link;	//todo
	console.log(link);
});