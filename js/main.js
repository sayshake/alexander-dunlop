$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 200) { 
              $('.navbar').addClass('solid');

          } else {
              $('.navbar').removeClass('solid');
          }
        });

       
});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: ["",""],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});