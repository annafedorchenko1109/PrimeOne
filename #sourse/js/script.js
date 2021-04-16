$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.header__adaptive-container').toggleClass('active');
	$('body').toggleClass('lock');
});