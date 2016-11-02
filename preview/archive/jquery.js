$(document).ready(function() {
	
	var nav = $('.nav');
    var li = $('.nav li');
    //var logo = $('#logo');
	var banner = $('.intro');

	// $(window).scroll(function() {
	// 	var windowpos = $(window).scrollTop();
		
	// 	if (windowpos>=banner.outerHeight()) {
	// 		nav.addClass('fixedTop');
 //            li.addClass('fixedli');
 //            //logo.removeClass('not-visible');
	// 	}
		
	// 	else {
	// 		nav.removeClass('fixedTop');
 //            li.removeClass('fixedli');
 //            //logo.addClass('not-visible');
	// 	}
		
	// });

    var navBarY = $(".nav").offset().top;
    $(document).scroll(function () {
        if ($(window).scrollTop() >= navBarY) {
            $(".nav").addClass("fixedTop");
        } else {
            $(".nav").removeClass("fixedTop");
        }
    });

});