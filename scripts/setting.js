$(document).ready(function () {

});
$(window).on('load', function () {
	move_to_section();
});

function move_to_section() {
	$('a.move-sec').click(function (e) {
		var dataOffsetTop = 150;
		var window_sizescroll = $(window).width();
		if (window_sizescroll <= 992) {
			var dataOffsetTop = 80;
		}
		$('a.move-sec').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
		var animation_name = ' animated fadeInDown';
		var moveID = $(this).attr('href');
		var target = $(moveID);
		var getScrollTop = (target.offset().top);
		var scrollTopModify = (getScrollTop - dataOffsetTop);
		$('html, body').stop().animate({
			'scrollTop': scrollTopModify
		}, 600);
	});
}