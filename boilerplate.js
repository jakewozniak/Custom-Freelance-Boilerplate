// Open external sites in new window
$('a[rel="nofollow"],a[rel="external"]').click(function (event) { 
     event.preventDefault(); 
     window.open(this.href);
});

// Hover Class on Touch
$( "" ).bind("tap", function(event) {
	event.preventDefault();
	$(this).toggleClass("hover");
})

// Smooth Scrolling 
$("").click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});