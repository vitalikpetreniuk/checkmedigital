var $ = jQuery;

$(function() {
		
	$('.ticker').marquee({
		line: '.ticker__wrapper',
		animSpeed: 50,
		pauseOnHover: false,
	});

	$('.language-toggle__current').on('click', function () {
		
		$(this).toggleClass('_active');
		$('.language-toggle__list').slideToggle();
	})

	$('.video-content__button').on('click', function () {
		
		$('.video-content__vbox video').attr('src', 'img/main.mp4').attr('controls', true).removeAttr('muted')
		$(this).remove()
	})
	
})