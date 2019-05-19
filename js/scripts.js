$(window).on('load', function () {
  $('#page-loader').fadeOut(500);
});

$(document).ready(function () {

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

  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $('.collapsible').collapsible();
  $('.responsive-slider-services').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.responsive-slider-header').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  navEnElTop();
  new WOW().init();

});
