var testSlider = $('.testimonials__slider');

$(document).ready(function(){
  testSlider.slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  })
});