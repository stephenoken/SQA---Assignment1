$(document).ready(function () {
    var overview1 = $('#overview-1');
	var overview2 = $('#overview-2');
	var overview4 = $('#overview-4');
    var overviewOriginOffSet1Start = overview1.offset().top;
	var overviewOriginOffSet2Start = overview2.offset().top -150;
	var overviewOriginOffSet4Start = overview4.offset().top -150;


    function scroll() {
        if ($(window).scrollTop() >= overviewOriginOffSet1Start) {
            $('#overview-1').addClass('sticky');
			$('#main-body-1').removeClass('rebalance-main-content');
        }else {
            $('#overview-1').removeClass('sticky');
			$('#main-body-1').addClass('rebalance-main-content');
        }
		if ($(window).scrollTop()>=overviewOriginOffSet2Start) {
			 $('#overview-2').addClass('sticky');
			 $('#overview-1').addClass('disappear');
		} else {
			 //$('#overview-2').removeClass('sticky');
			 $('#overview-1').removeClass('disappear');
		}
		if($(window).scrollTop()>=overviewOriginOffSet4Start){
			 $('#overview-4').addClass('sticky');
		}else{
			 $('#overview-4').removeClass('sticky');
		}
		/*if($(window).scrollTop()>=overviewOriginOffSet3Start){
			$('#overview-3').removeClass('hide-chart');
		}*/
    }

    document.onscroll = scroll;

});