(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover (delegated for dynamic content)
    function toggleNavbarMethod() {
        if ($(window).width() > 992) {
            $(document).on('mouseover', '.navbar .dropdown', function () {
                $('.dropdown-toggle', this).trigger('click');
            }).on('mouseout', '.navbar .dropdown', function () {
                $('.dropdown-toggle', this).trigger('click').blur();
            });
        } else {
            $(document).off('mouseover', '.navbar .dropdown').off('mouseout', '.navbar .dropdown');
        }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $(document).on('click', '.back-to-top', function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

