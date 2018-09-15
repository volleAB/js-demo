let sheep = document.getElementsByClassName('sheep')[0]
let timer = []
let timer2 = []
let i = 0
let j = 0
let flag = true

move = () => {
	i++
	sheep.style.backgroundPosition = -164*i + "px " + 0 + "px"
	if(i>6) {
		i = 0
	}else {
		setTimeout(move, 100)
	}
}

clickMove = () => {
	i++
	sheep.style.backgroundPosition = -164*i + "px " + -117 + "px"
	if(i>6) {
		i = 0
	}else {
		setTimeout(clickMove, 80)
	}
}

j += 1
timer[j] = setInterval(move, 580)

// timer = setInterval(move, 580)



sheep.onmousedown = () => {
	for(let q = 0; q<timer.length; q++) {
		clearInterval(timer[q])
	}
	timer2 = setInterval(clickMove, 100)
}

sheep.onmouseup = () => {
	clearInterval(timer2)
	timer = setInterval(move, 540)
}