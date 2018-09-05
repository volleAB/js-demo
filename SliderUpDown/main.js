let oSlider = document.getElementsByClassName('s-items')[0]
let aImg = document.getElementsByClassName('s-img')
oSlider.appendChild(aImg[0].cloneNode(true))
oSlider.insertBefore(aImg[2].cloneNode(true),aImg[0])
let moveSet = 440

let goUp = () => {
	moveSet += 440
	if(moveSet >= 1760) {
		moveSet = 440	
	}
	go = () => {
		speed = 
		oSlider.style.transform = 'translateY(-'+moveSet+'px)'
	}
	
	console.log(moveSet)
}

let autoPlay = (dir) => {
	let timer = setInterval(goUp,4000)
}

// setTimeout(goUp,1000)
autoPlay()