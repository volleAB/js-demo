var one = $("#one");
var two = $("#two");
var three = $("#three");
var oItem = $(".item");

function carousel() {
	var timer = setInterval(function () {
		oItem.each(function (index, element) {
			var _this = $(this);
			_this.fadeOut("slow");
			_this.next(".item").fadeIn("slow");
			// if(index == 2) {
			// 	oItem[0].fadeIn("slow");
			// }
			// oItem[index+1].fadeIn("slow");

			// console.log(oItem[index+1], element);
		})
	}, 6000)
}

carousel()

// one.fadeIn("slow");
// setTimeout(() =>{
// 	one.fadeOut("slow");
// }, 3000)


// console.log(one, oItem[0])