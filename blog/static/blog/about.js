jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.back-to-top').fadeIn(300);
        } else {
            jQuery('.back-to-top').fadeOut(300);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        jQuery('html, body').animate({scrollTop: 0}, 300);
        return false;
    })
});
