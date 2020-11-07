$(function() {
  let header = $('#header');
  let logo = $('.logo');
  let menu = $('.menu');
  let mainPage = $('#mainPage');
  let mainPageH = mainPage.innerHeight();
  let scrollPos = $(window).scrollTop();
  let burgerBtn = $('#jsBurgerBtn');

  $(window).on('scroll load resize', function() {
     let mainPageH = mainPage.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > mainPageH) {
      header.addClass('fixed');
      logo.addClass('fixed');
      menu.addClass('fixed');
    } else {
      header.removeClass('fixed');
      logo.removeClass('fixed');
      menu.removeClass('fixed');
    }
  });

  // Smooth scroll
  $('[data-scroll]').on('click', function(event){
    event.preventDefault();

    let elementID = $(this).data('scroll');
    let elementOffset = $(elementID).offset().top;
    

    $('html, body').animate({
      scrollTop: elementOffset - 80
    }, 1000);
  
    burgerBtn.toggleClass('burger__btn--active');
    menu.toggleClass('show');
  });

// Burger
  burgerBtn.on('click', function(e) {
    e.preventDefault();

    $(this).toggleClass('burger__btn--active');

    menu.toggleClass('show');

  });

});




// slider
$(function() {
  let slider = $('#jsTestimonialsSlider');

      slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false

      });
});

  