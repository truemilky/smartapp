$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__inner,.header__burger-opened').toggleClass('header__active');
    $('.header__burger').toggleClass('header__burger-active');
    $('.burger__span').toggleClass('burger__span-active');
    $('body').toggleClass('active');
  })

  $('.header__list').click(function(event){
    $('.header__inner,.header__burger-opened').toggleClass('header__active');
    $('.header__burger').toggleClass('header__burger-active');
    $('.burger__span').toggleClass('burger__span-active');
    $('body').toggleClass('active');
  })

  $('.header__contacts').click(function(event){
    $('.header__inner,.header__burger-opened').toggleClass('header__active');
    $('.header__burger').toggleClass('header__burger-active');
    $('.burger__span').toggleClass('burger__span-active');
    $('body').toggleClass('active');
  })
})