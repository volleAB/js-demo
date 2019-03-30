let oInput = document.getElementsByTagName('input')[0]
let oBut = document.getElementsByTagName('button')[0]
let oAir = document.getElementsByClassName('airport')[0]
let aLine = oAir.getElementsByClassName('line')
let width = document.body.scrollWidth + 100
let node = null
let x = ''

getText = () => {
    x = document.getElementById("myInput").value
    return x
}

// clearInterval(timer)

oBut.onclick = () => {
	let timer = null
	create()
	timer = setInterval(move,Math.floor(Math.random()*11)+2000)
}

move = () => {
	let speed = 4
	let nowLeft = null
	go = () => {
		nowLeft = node.offsetLeft
		node.style.left = nowLeft - speed + 'px'
		console.log(nowLeft)
		if(nowLeft < -100) {
			return 
		}else {
			setTimeout(go,30)
		}
	}
	go()
	// return 	go
	// nowLeft = node.offsetLeft
	// node.style.left = nowLeft - speed + 'px'
}

create = () =>{	//创建弹幕
	node = document.createElement('span')
	node.style.left = width + 'px'
	let textnode = document.createTextNode(x)
	node.appendChild(textnode)
	aLine[Math.floor((Math.random()*aLine.length))].appendChild(node)
}

del = () => {	//删除弹幕

}