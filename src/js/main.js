window.onscroll = function() {headerFunction()};

    // function change header if scroll > 50px bottom

    function headerFunction() {

        var header_nav = $('.header');
        var nav_menu_link = $('.nav-menu-link');
        var logo = $('.logo-link');

        if (document.body.scrollTop > 115 || document.documentElement.scrollTop > 115) {
            logo.addClass('hide');
            header_nav.addClass('fixed-nav');
            nav_menu_link.addClass('line-height');
        } else {
            header_nav.removeClass('fixed-nav');
            nav_menu_link.removeClass('line-height');
            logo.removeClass('hide');
        }
    }

$(document).ready(function () {
    $('.parallax').parallax();
});
