var slider = $('.features__slider');
var galSlider = $('.gallery__slider');
var testSlider = $('.testimonials__slider');

$(document).ready(function(){
  slider.slick({
    arrows: false,
  });

  $('.button-prev').on('click', function(event) {
    event.preventDefault();
    slider.slick('slickPrev');
  });

  $('.button-next').on('click', function(event) {
    event.preventDefault();
    slider.slick('slickNext');  
  });
});

$(document).ready(function(){
  galSlider.slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1320,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }, {  
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      } 
    }]
  });

  $('.gallery-prev').on('click', function(event){
    event.preventDefault();
    galSlider.slick('slickPrev');
  })

  $('.gallery-next').on('click', function(event){
    event.preventDefault();
    galSlider.slick('slickNext');
  })
});

$(document).ready(function(){
  testSlider.slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  })
});
