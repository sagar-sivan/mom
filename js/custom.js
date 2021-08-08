
(function ($) {

  AOS.init({
    easing: 'ease-out-sine',
    anchorPlacement: 'top-bottom',
    disable: window.innerWidth < 1200,
    once: true,
    duration: 1000
  });
 

  $(function () {
      $('[data-toggle="tooltipa"] a').tooltip();
  })

  //menu click
  $(".hamburger").click(function(){
    $("body").toggleClass("menu-open");
});
$('.hamburger').keypress(function (e) {
  var key = e.which;
  if(key == 13)
  {
    $('.hamburger').click();
    return false;
  }
});

//social media button click
$(".btnSocialmedia").click(function(){
  $(".nav-socialmedia").toggleClass("show");
}); 


$(".homebanner").slick({
  dots: true,
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1
});

// scroll top script
$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.scrollup').show();
    } else {
        $('.scrollup').hide();
    }

    if ($(this).scrollTop() > 100) {
      $('.header').addClass('toTop');
    } else {
      $('.header').removeClass('toTop');
    }
  });
  
});

$(".nav__btn").click(function(){
  $("body").toggleClass("nav-open");
});

 
// scroll top script
$(document).ready(function () {

  $(window).scroll(function () { 

    /*var bannerHeight = $(".banner-holder__inner").height();

    if ($(this).scrollTop() > bannerHeight) {
        $('.content-area-menu').addClass("toFixed");
    } else {
      $('.content-area-menu').removeClass("toFixed");
    }*/

  });

});



  //search click
  $(".search-js").click(function(){
    $("body").toggleClass("search-open");
  });
  $('.search-js').keypress(function (e) {
  var key = e.which;
  if(key == 13)
  {
    $('.search-js').click();
    return false;
  }
  });



  $('.testimonial__nav').slick({
    slidesToShow: 3,
    asNavFor: '.testimonial__content',
    dots: false,
    centerPadding: '0',
    centerMode: true,
    focusOnSelect: true
  });

  $('.testimonial__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.testimonial__nav'
  });




/**/
  
  $(".slick-class-1").slick({
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    dots: false
  });

  $(".slick-class-2").slick({
    rows: 2,
		dots: true,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [{
  
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }]

  });


  $(".slick-class-3").slick({
    centerMode: false,
    centerPadding: '0',
    slidesToShow: 1,
		infinite: false,
    dots: false,
     
    responsive: [{
  
        breakpoint: 1284,
        settings: {
          arrows: false,
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
  
      }]
  });  

  
  
  $(".slick-class-5").slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    
    responsive: [{
  
        breakpoint: 1320,
        settings: {
          centerPadding: '0',
        }
  
      }, {
  
        breakpoint: 575,
        settings: {
          centerPadding: '0',
        }
  
      }]
  });


})(jQuery);