var galSlider = $('.gallery__slider')

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