
document.onselectstart = new Function('event.returnValue = false;');
var rightDiv = document.getElementById('right');
var mainDiv = document.getElementById('main');
var upDiv = document.getElementById('up');
var leftDiv = document.getElementById('left');
var downDiv = document.getElementById('down');
var leftupDiv = document.getElementById('left-up');
var rightupDiv = document.getElementById('right-up');
var rightdownDiv = document.getElementById('right-down');
var leftdownDiv = document.getElementById('left-down');
var ifKeyDown = false;//鼠标按下状态
var contact = "";//表示被按下的触点
//鼠标按下事件
rightDiv.onmousedown = function(){
	ifKeyDown = true;
	contact = "right";
}
upDiv.onmousedown = function(){
	ifKeyDown = true;
	contact = "up";
}
leftDiv.onmousedown = function(){
	ifKeyDown = true;
	contact = "left";
}
downDiv.onmousedown = function(){
	ifKeyDown = true;
	contact = "down";
}
leftupDiv.onmousedown = function(){
	ifKeyDown = true;
	contact = "leftupDiv";
}
rightupDiv.onmousedown = function(){
	ifKeyDown = true;
	contact = "rightupDiv";
}
rightdownDiv.onmousedown = function(){
	ifKeyDown = true;
	contact = "rightdownDiv";
}
leftdownDiv.onmousedown = function(){
	ifKeyDown = true;
	contact = "leftdownDiv";
}
//鼠标松开事件
window.onmouseup = function(){
	ifKeyDown = false;
}
//鼠标移动事件
window.onmousemove = function(e){
	if(ifKeyDown == true){
		switch(contact){
			case "right" : rightMove(e);break;
			case "up" : upMove(e);break;
			case "left" : leftMove(e);break;
			case "down" : downMove(e);break;
			case "leftupDiv" : leftMove(e);upMove(e);break;
			case "rightupDiv" : rightMove(e);upMove(e);break;
			case "rightdownDiv" : rightMove(e);downMove(e);break;
			case "leftdownDiv" : leftMove(e);downMove(e);break;
		}
	}
	setChoice();
	setPreview();
}
//right移动
function rightMove(e){
	var x = e.clientX;//鼠标X坐标
	var addWidth = "";//鼠标移动后选项框增加的宽度
	var widthBefore = mainDiv.offsetWidth -2;//选取框变化前的宽度
	addWidth = x - getPosition(mainDiv).left - widthBefore;//鼠标移动后增加的宽度
	mainDiv.style.width = addWidth + widthBefore + "px";//选取框变化后
}
//up移动
function upMove(e){
	var y = e.clientY;//鼠标Y坐标
	var mainY = getPosition(mainDiv).top;
	var addHeight = mainY - y;
	var heightBefore = mainDiv.offsetHeight -2;
	mainDiv.style.height = heightBefore + addHeight + "px";
	mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";
}
//left移动
function leftMove(e){
	var x = e.clientX;//鼠标X坐标
	var mainX = getPosition(mainDiv).left;
	var addWidth = mainX - x;
	var widthBefore = mainDiv.offsetWidth -2;
	mainDiv.style.width = widthBefore + addWidth + "px";
	mainDiv.style.left = mainDiv.offsetLeft - addWidth + "px";
}
//down移动
function downMove(e){
	var y = e.clientY;
	var heightBefore = mainDiv.offsetHeight -2; 
	var addHeight = y - getPosition(mainDiv).top - heightBefore;
	mainDiv.style.height = heightBefore + addHeight +"px";
}

//获取元素相对屏幕上，左边的距离 利用offsetLeft,offsetTop
function getPosition(node){
	var top = node.offsetTop;
	var left = node.offsetLeft;
	var parent = node.offsetParent;
	while(parent != null){
		left += parent.offsetLeft;
		top += parent.offsetTop;
		parent = parent.offsetParent;

	}
	return {"left":left,"top":top};
}

//设置选取区域高亮可见
function setChoice(){
	var top = mainDiv.offsetTop;
	var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
	var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
	var left = mainDiv.offsetLeft;
	var img2 = document.getElementById('img2');
	img2.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";
}

//预览函数
function setPreview(){
	var top = mainDiv.offsetTop;
	var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
	var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
	var left = mainDiv.offsetLeft;console.log(left);
	var img3 = document.getElementById('img3');
	// img3.style.top = -top+"px";
	// ing3.style.left = -left+"px";
	img3.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";
}
