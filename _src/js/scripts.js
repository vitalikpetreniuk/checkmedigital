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

let text_items = $('.info-content__animate').children();
let items_count = text_items.length;
let index = 0;
let text_show_timer = 3000;
let text_hide_timer = 2800;

function animateText() {

	for(let i=0; i<items_count; i++){

		$(text_items[i]).removeClass('_show').removeClass('_hide');
	}

	$(text_items[index]).addClass('_show');

	setTimeout(function(){
		
		$(text_items[index]).addClass('_hide');
	},text_hide_timer)

	setTimeout(function(){

		if(index == items_count-1){
			index=0;
		} else {
			index++;
		}

		animateText();
	},text_show_timer); 
}animateText()
	
})