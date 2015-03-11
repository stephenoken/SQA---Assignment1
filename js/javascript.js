$(document).ready(function () {
    var overview = $('.overview');
    var origOffsetY = overview.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.overview').addClass('sticky');
        } else {
            $('.overview').removeClass('sticky');
        }


    }

    document.onscroll = scroll;

});