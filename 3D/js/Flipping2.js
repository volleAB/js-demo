// 纸片翻转（传入纸片的classname）
function trunto(id) {
	var oList = document.getElementsByClassName(id);
	//改进
	//console.log(oList[0].className)
	for(var index in oList) {
		console.log(oList[index]);
	}
}