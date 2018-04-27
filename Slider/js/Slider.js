// Slider

var oCar = document.getElementById('carousel');
var oPre = document.getElementById('pre');
var oNext = document.getElementById('next');
var oItems = document.getElementById('caro-items');
var sDots = document.getElementById('control');
var aDots = document.getElementById('control').getElementsByTagName('li');
var aImg = oItems.getElementsByTagName('img');
var index = null;
//图片切换函数
function (pre,mext){
	oItems.style.width= aImg[0].offsetWidth * aImg.length + 'px';
}
