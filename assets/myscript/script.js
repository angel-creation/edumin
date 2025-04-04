$(function () {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$(".ed-header").addClass("header-active");
		} else {
			//remove the background property so it comes transparent again (defined in your css)
			$(".ed-header").removeClass("header-active");
		}
	});
});

var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
});


jQuery(document).ready(function () {

	var mouseX = 0, mouseY = 0;
	var xp = 0, yp = 0;

	$(document).mousemove(function (e) {
		mouseX = e.pageX - 30;
		mouseY = e.pageY - 30;
	});

	setInterval(function () {
		xp += ((mouseX - xp) / 6);
		yp += ((mouseY - yp) / 6);
		$("#circle").css({ left: xp + 'px', top: yp + 'px' });
	}, 20);

});