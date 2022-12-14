// JavaScript Document

$(document).ready(function(e) {
    $(".ind>li").click(function(){
		var i = $(this).index();
		var left = parseInt($(".content>div").eq(i).css("left"));
		console.log(left);
		$(".content").stop().animate({"left":-left},1000);
		$(".ind>li").removeClass("on");
		$(this).addClass("on");
	});
});