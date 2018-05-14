//Check-up
var aInput = document.getElementsByTagName('input');
var oName = aInput[0];
var pwd = aInput[1];
var pwd2 = aInput[2];
var aP = document.getElementsByTagName('p');
var name_msg = aP[0];
var pwd_msg = aP[1];
var pwd2_msg = aP[2];
var count = document.getElementById('count');
var aEm = document.getElementsByTagName('em');
var name_length = 0;



function getLength(str) {
	return str.replace(/[^\x00-xff]/g,"xx").length
}

oName.onfocus = function () {
	name_msg.style.display = 'block';
	name_msg.innerHTML = '<i class="ati"></i>5-25个字符，一个汉字为两个字符，推荐使用中文会员名';
}

oName.onkeyup = function () {
	count.style.visibility = "visible";
	name_length = getLength(this.value);
	count.innerHTML = name_length + "个字符";
	if(name_length == 0) {
		count.style.visibility = "hidden";
	}
}

oName.onblur = function () {
	var re = /[^\w\u4e00-\u9fa5]/g;
	if(re.test(this.value)) {
		name_msg.innerHTML = ' 含有非法字符!';
	}
	else if(this.value == "") {
		name_msg.innerHTML = ' 不能为空!';
	}
	else if(name_length > 25) {
		name_msg.innerHTML = ' 超出!';
	}
	else {
		name_msg.innerHTML = ' <i class="ok"></i>';
	}
}