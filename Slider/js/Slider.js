// Slider

var oCar = document.getElementById('carousel');
var oPre = document.getElementById('pre-cover');
var oNext = document.getElementById('next-cover');
var oItems = document.getElementById('caro-items');
var oDots = document.getElementById('control');
var aDots = oDots.getElementsByTagName('li');
var aImg = oItems.getElementsByTagName('img');
var img_first = oItems.getElementsByClassName("item")[0];
var img_last = oItems.getElementsByClassName("item")[4];
var animated = false;
oItems.appendChild(img_first.cloneNode(true));
oItems.insertBefore(img_last.cloneNode(true),oItems.getElementsByClassName("item")[0]);
var index = 1;

console.log(oItems)

//图片切换函数

function animate(offset){

	animated = true;
  var newLeft = oItems.offsetLeft + offset;
  var time = 300;     //位移总时间
  var interval = 30;    //位移间隔时间
  
  
  function go(){
  	var speed = (newLeft - oItems.offsetLeft)/10;
  	speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  	console.log(speed);
  	if((speed < 0 && oItems.offsetLeft > newLeft)||(speed > 0 && oItems.offsetLeft < newLeft)){   //newLeft目标值
  		oItems.style.left = oItems.offsetLeft + speed + 'px';
      	setTimeout(go,interval);  //不止做一次运动（go函数），每隔30毫秒前进一下
    	}
    	else{
      	animated = false;
      	oItems.style.left = newLeft + 'px';
      if(newLeft < -4800){
        oItems.style.left = -960+"px";
      }
      if(newLeft > -960){
        oItems.style.left = -4800+"px";
      }
    }
  }
  go();
}

//小圆点
function showDot(){
  for(var i=0;i<aDots.length;i++){
    aDots[i].className="";
  }
  aDots[index-1].className="active";
}

oNext.onclick = function(){
  if(!animated){
      index++;
    }
    if(index>5){
      index=1;
    }
    showDot();
    if(!animated){
      animate(-960);
    }
}

oPre.onclick = function(){
  if(!animated){
      index--;
    }
    if(index<1){
      index=5;
    }
    showDot();
    if(!animated){
      animate(960);
    }
}

function autoplay(){
    timer = setInterval(function(){
      oNext.onclick();
    }, 5000)
}

function stopautoplay(){
    clearInterval(timer);
}

oItems.onmouseover = stopautoplay;
oItems.onmouseout = autoplay;
autoplay();