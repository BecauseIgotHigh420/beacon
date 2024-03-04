$(function() {
	//calling the fadeIn funciton 
	$(window).on('scroll resize', fadeIn);
	$(window).trigger('scroll');
});

function fadeIn(){
	var winHeight = $(window).height();
	var bodyScroll = $(document).scrollTop();
	var calcHeight = bodyScroll + winHeight -  ($(window).width() <= 768 ? 0 : 150);

	$('.fadein-wrap').each(function(index, el) {
		if ( $(this).offset().top  < calcHeight ) {
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
}