
function produce (itemCon, aItem, seep, time) {

    let thisItemCon = $(itemCon)
    let thisItem = $(aItem)
    let num = thisItem.length
    let node = thisItem
    let timer = null
    let limit = 2*parseInt(thisItem.css('margin')) + parseInt(thisItem.css('width'))

    thisItemCon.css('width', limit*num*2 + 'px')
    thisItemCon.append(node.clone())

    function move (speed, time) {
    let i = 0
    let nowX = thisItemCon.css('transform').replace(/[^0-9\-,]/g,'').split(',')[4]
    nowX = parseInt(nowX)

    function itemMove () {
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

    function goMove () {
        move(seep, time)
    }

    thisItem.mouseover(() => {
        clearInterval(timer)
    })

    thisItem.mouseout(() => {
        timer = setInterval(goMove, 10)
    })

    function startMove () {
        timer = setInterval(goMove, 10)
    }
}

export { produce }