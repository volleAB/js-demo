
function Flipping(box,direction,time) {
	var oBox = document.getElementById(box);
	var time = time;
	oBox.style.transition = 'all ' + time + 's';
	if(direction === 'up'){
		oBox.onmouseover = function () {
			oBox.style.transform = 'perspective(700px) rotateY(90deg) rotateX(180deg) rotateZ(-90deg)';
		}
		oBox.onmouseout = function () {
			oBox.style.transform = 'perspective(700px) rotateY(90deg) rotateX(180deg)';
		}
	}
	else if(direction === 'right') {
		oBox.onmouseover = function () {
			oBox.style.transform = 'perspective(700px) rotateY(180deg) rotateX(180deg)';
		}
		oBox.onmouseout = function () {
			oBox.style.transform = 'perspective(700px) rotateY(90deg) rotateX(180deg)';
		}
	}
	else if(direction === 'left') {
		oBox.onmouseover = function () {
			oBox.style.transform = 'perspective(700px) rotateY(0deg) rotateX(180deg)';
		}
		oBox.onmouseout = function () {
			oBox.style.transform = 'perspective(700px) rotateY(90deg) rotateX(180deg)';
		}
	}
}