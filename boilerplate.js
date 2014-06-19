// Open external sites in new window
jQuery('a[rel="nofollow"],a[rel="external"]').click(function (event) { 
     event.preventDefault(); 
     window.open(this.href);
});

// Hover Class on Touch
jQuery( "" ).bind("tap", function(event) {
	event.preventDefault();
	jQuery(this).toggleClass("hover");
})

// Smooth Scrolling 
jQuery("").click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = jQuery(this.hash);
		target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			jQuery('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});

// .SVG Fallback to .PNG */
jQuery('.no-svg img[src*="svg"]').attr('src', function() {
	return jQuery(this).attr('src').replace('.svg', '.png');
});