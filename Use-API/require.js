
var songlist = '';

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
			success:res => {
				resolve(res.showapi_res_body.pagebean.songlist);
			}
		});
	});
}
const jsonData = {
	"showapi_appid": '66637', 
	"showapi_sign": '7D57FEE438600A681F51A0D35D7CC3B5', 
	"topid":"4"
}
const firstAjax = promise('post', 'http://route.showapi.com/213-4', jsonData)
firstAjax.then((res) => {
	console.log(res);
	songlist = res;
	output();
});

const output = () => {
	let con = $('.contain');
	let html = '';
	console.log(con);
	for(let i = 0; i < 20; i++) {
		html += "<div>"+ songlist[i].songname + '---' + songlist[i].singername +"</div>";
	}
	con.append(html);
	con.find('div').addClass('border')
	// con.find("div").className = 'border';
}
console.log("sdad")
// var get_list = () => {
// 	$.ajax({
// 		type: 'post',
// 		url: "http://route.showapi.com/213-4",
// 		dataType: "json",
// 		data: {
// 	        "showapi_appid": '66637', //这里需要改成自己的appid
// 	        "showapi_sign": '7D57FEE438600A681F51A0D35D7CC3B5',  //这里需要改成自己的应用的密钥secret
// 	        "topid":"4"
// 		},
// 		error: function(XmlHttpRequest, textStatus, errorThrown) {
// 	        alert("操作失败!");
// 	    },
// 	    success: function(res) {
// 	    	songlist = res.showapi_res_body.pagebean.songlist;
// 	        console.log(songlist,songlist[1]);
// 	        // alert(result.showapi_res_code)
// 	        output();
// 	    }
// 	})
// }
// get_list();