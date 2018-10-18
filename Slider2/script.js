
function produce (itemCon, aItem) {
    let thisItemCon = $(itemCon)
    let thisItem = $(aItem)
    let timer = null
    let limit = 2*parseInt(thisItem.css('margin')) + parseInt(thisItem.css('width'))

    move = (speed, time, num) => {
    let i = 0
    let nowX = thisItemCon.css('transform').replace(/[^0-9\-,]/g,'').split(',')[4]
    nowX = parseInt(nowX)
    itemMove = () => {
        setTimeout(() => {
            thisItemCon.css('transform', 'translateX(' + (nowX - speed) + 'px)')
        }, time)
        if(nowX <= -(limit*num)) {
            thisItemCon.css('transform', 'translateX(0px)')
            nowX = 0
        }
    }
        itemMove()
    }

    goMove = () => {
        move(1, 10, 8)
    }

    thisItem.mouseover(() => {
        clearInterval(timer)
    })

    thisItem.mouseout(() => {
        timer = setInterval(goMove, 10)
    })

    startMove = () => {
        timer = setInterval(goMove, 10)
    }

    startMove()
}