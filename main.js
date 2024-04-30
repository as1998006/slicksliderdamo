// https://kenwheeler.github.io/slick/

$(document).ready(function(){
    $('.slick-demo').slick({
    dots: false,
      slidesToShow: 2,
      slidesToScroll: 2,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
      mobileFirst: true,
      nextArrow: '<i class="fa-regular fa-circle-right"></i>',
      prevArrow: '<i class="fa-regular fa-circle-left"></i>',
    });
    // $('.slick-demo-2').slick({
    //   dots: true,
    // infinite: true,
    // speed: 500,
    // fade: true,
    // cssEase: 'linear'
    // });
  });