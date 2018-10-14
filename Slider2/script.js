let itemCon = $('.s-container')
let aItem = $('.s-container .item')
let timer = null
let limit = 2*parseInt(aItem.css('margin')) + parseInt(aItem.css('width'))
// console.log(limit)

move = (speed, time, num) => {
    let i = 0
    let nowX = itemCon.css('transform').replace(/[^0-9\-,]/g,'').split(',')[4]
    nowX = parseInt(nowX)
    itemMove = () => {
        setTimeout(() => {
            itemCon.css('transform', 'translateX(' + (nowX - speed) + 'px)')
        }, time)
        if(nowX <= -(limit*num)) {
            itemCon.css('transform', 'translateX(0px)')
            nowX = 0
        }
    }
    itemMove()
}

goMove = () => {
    move(1, 10, 8)
}

aItem.mouseover(() => {
    clearInterval(timer)
})

aItem.mouseout(() => {
    timer = setInterval(goMove, 10)
})

startMove = () => {
    timer = setInterval(goMove, 10)
}

startMove()