let oS = document.getElementsByClassName('slider')[0]
let oSlider = document.getElementsByClassName('s-items')[0]
let aImg = document.getElementsByClassName('s-img')
let animate = true
let index = 0
let timer 

oSlider.appendChild(aImg[0].cloneNode(true))
oSlider.insertBefore(aImg[2].cloneNode(true),aImg[0])

let moveSet = 440

let goUp = () => {				//缓冲运动
	let interval = 20;
	let speed = 0;
	let newOffset = oSlider.offsetTop - moveSet

	go = () => {
		speed = (newOffset - oSlider.offsetTop)/10
		speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed)
		if (speed < 0 && oSlider.offsetTop > newOffset) {
			oSlider.style.top = oSlider.offsetTop + speed +'px'
			setTimeout(go,interval)
			console.log('go')
		}else {
			oSlider.style.top = newOffset + 'px'
			if (newOffset < -1320) {
				animate = false
				oSlider.style.top = -440 + 'px'
				console.log('err2')
			}else if (newOffset > -440) {
				animate = false
				oSlider.style.top = -1320 + 'px'
				console.log('err1')
			}
		}
		console.log(oSlider.offsetTop + ',' + newOffset + ',' + speed)
	}
	go()
}

let moveDot = (index) => {
	let oDot = document.getElementsByClassName('s-dot')[0]
	let aDots = oDot.getElementsByTagName('li')
	for(var i=0; i<aDots.length; i++){
    	aDots[i].className = "";
  	}
  	aDots[index].className = 'active'
}

let nextMove = () => {
	goUp()
	if (animate) {
		index++
		if (index>2) {
  			index = 0
  		}
	} else {
		index = 0
		animate = true
		index++
	}
	moveDot(index)
}

let autoPlay = (dir) => {
	timer = setInterval(nextMove,3800)
	animate = true
	console.log('start')
}

let stopPlay = () => {
	clearInterval(timer)
	animate = false
	console.log('stop')
}

oS.onmouseover = () => { stopPlay() }

oS.onmouseout = () => { autoPlay() }

autoPlay()