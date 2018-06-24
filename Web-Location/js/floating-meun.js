var oModel = document.getElementById('model');
var oShow = document.getElementById('show');
var oClose = document.getElementById('close');
var oMenu = document.getElementById('float-menu');
var oDropdown = document.getElementById('dropdown');
console.log(oDropdown)
let timer = null;


window.onscroll = () =>{
	console.log(document.documentElement.scrollTop, document.body.scrollTop, document.documentElement.clientHeight);
	var scrollTop = document.documentElement.scrollTop;
	startMove(parseInt((document.documentElement.clientHeight-oMenu.offsetHeight)/2)+scrollTop);
}

startMove = (iTarget) => {
	clearInterval(timer);
	timer = setInterval(() => {
		let speed = (iTarget - oMenu.offsetTop)/6;
		speed = speed > 0? Math.ceil(speed): Math.floor(speed);
		console.log(speed)
		if(oMenu.offsetTop == iTarget){
				clearInterval(timer);
		}
		else{
			oMenu.style.top = oMenu.offsetTop + speed +'px';
		}
	}, 30)
}

oModel.onclick = () =>{
	oShow.classList.add("is-active");
}

oClose.onclick = () => {
	oShow.classList.remove("is-active");
}

oDropdown.onclick = () => {
	$("#dropdown").toggleClass('is-active');
}