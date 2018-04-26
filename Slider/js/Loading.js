// loading

function loading(loading,pic) {
	var aImg = document.getElementsByTagName('img');
	var oLoad = document.getElementById(loading);
	var oPic = document.getElementById(pic);
	var num = 0;
	for(var i = 0; i < aImg.length; i++) {
		var oImg = new Image();
		// console.log(oImg);
		oImg.onload = function () {
			num++;
			var len = aImg.length;
			var percent = oLoad.getElementsByTagName('b');
			percent[0].innerHTML = parseInt(num/len*100)+"%";
			// console.log(oLoad.getElementsByTagName('b'));
			if(num >= i) {
				fadeOut(oLoad,800)
			}
		}
		oImg.src = aImg[i].src;
	}
}

//fadeOut

function fadeOut(el,time){
    if(el.style.opacity === ""){  
        el.style.opacity = 1;  
    }  
    if(el.style.display === "" || el.style.display === 'none'){  
        el.style.display = 'block';  
    }
    var t = setInterval(function(){  
        if(el.style.opacity > 0){  
            el.style.opacity = parseFloat(el.style.opacity)-0.01;  
        }  
        else{  
            clearInterval(t);  
            el.style.display = 'none'  
        }  
    },time/100);  
}