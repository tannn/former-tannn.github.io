$(document).ready(function () {
    var navBarY = $(".nav").offset().top;
    $(document).scroll(function () {
        if ($(window).scrollTop() >= navBarY) {
            $(".nav").addClass("fixedTop");
        } else {
            $(".nav").removeClass("fixedTop");
        }
    });
});