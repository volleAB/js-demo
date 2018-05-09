// 纸片翻转（传入纸片的classname）
function trunto(id1,id2) {
	var oBack = null;
	var oFront = null;
	var oBox = document.getElementById(id1);
	var oList = document.getElementsByClassName(id2);
	//改进
	//console.log(oList[0].className)
	function funBackOrFront() {
		/*for(index in oList) {
			// if(oList[index])
			if(oList[index].classList.contains('back')) {
				oBack = oList[index];
				console.log(oBack)
			}
		}*/			//有多出来的东西0.0
		for(var i = 0; i < 2; i++) {
			oList.index = oList[i]
			if(oList[i].classList.contains('out')) {
				oBack = oList[i];
			}
			else {
				oFront = oList[i];
			}
		}
	}
	funBackOrFront();
	oBox.addEventListener("click", function () {
		console.log(oBack);
		oFront.classList.add("out");
		oFront.classList.remove("in");
		setTimeout(function () {
			oBack.classList.add("in");
			oBack.classList.remove("out");
			funBackOrFront();
		}, 225)
		return false;
	})
}