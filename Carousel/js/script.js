// var one = $("#one");
// var two = $("#two");
// var three = $("#three");
// var oItem = $(".item");

// function carousel() {
// 	var timer = setInterval(function () {
// 		oItem.each(function (index, element) {
// 			var _this = $(this);
// 			_this.fadeOut("slow");
// 			_this.next(".item").fadeIn("slow");
// 			// if(index == 2) {
// 			// 	oItem[0].fadeIn("slow");
// 			// }
// 			// oItem[index+1].fadeIn("slow");

// 			// console.log(oItem[index+1], element);
// 		})
// 	}, 6000)
// }

// carousel()

// one.fadeIn("slow");
// setTimeout(() =>{
// 	one.fadeOut("slow");
// }, 3000)


// console.log(one, oItem[0])


$(function(){
	//第一张显示
	$("ul li").eq(0).show();
	//鼠标滑过手动切换，淡入淡出
	$(".dot a").mouseover(function() {
		$(this).addClass('active').siblings().removeClass("active");
		var index = $(this).index();
		i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
		// $(".pic li").eq(index).show().siblings().hide();
		$("ul li").eq(index).fadeIn(500).siblings().fadeOut(500);
	});
	
	//向右切换
	var play = function(){
		i++;
		i = i > 2 ? 0 : i ;
		$(".dot a").eq(i).addClass('active').siblings().removeClass("active");
		$("ul li").eq(i).fadeIn(500).siblings().fadeOut(500);
		console.log(i)
	}
	//向左切换
	var playLeft=function(){
		i--;
		i = i < 0 ? 2 : i ;
		$("ul li").eq(i).addClass('active').siblings().removeClass("active");
		$(".dot a").eq(i).fadeIn(500).siblings().fadeOut(500);
	}
	//自动轮播
	var i=0;
	var timer=setInterval(play,6000);
	//鼠标移入移出效果
	$(".dot").hover(function() {
		clearInterval(timer);
	}, function() {
		timer=setInterval(play,6000);
	});
	//左右点击切换
	$(".pre").click(function(){
		playLeft();
	})
	$(".next").click(function(){
		play();
	})
})