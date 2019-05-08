$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    new WOW().init();


    function navEnElTop() {
        $(document).ready(function () {
            var altura = $('#nav').offset().top;

            $(window).on('scroll', function () {
                if ($(window).scrollTop() > altura) {
                    $('#nav').addClass('navbar-fixed');
                } else {
                    $('#nav').removeClass('navbar-fixed');
                }
            });

            $(window).on('scroll', function () {
                if ($(window).scrollTop() > altura) {
                    $('nav').addClass('colorBarraTop');
                } else {
                    $('nav').removeClass('colorBarraTop');
                }
            });

        });
    }

    navEnElTop();

});
