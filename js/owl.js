$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: true,
        margin:10,
        nav:true,
        items:4,
        responsive:{
          0:{
            center: true,
            items:1,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
          },
         500:{
            center: true,
            items:3,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
          },
          970:{
            center: true,
            items:5
          }
        }
      });



        
         /* $( window ).resize(function() {
            var viewport = $(window).width();
            $('.users').removeClass('owl-carousel owl-theme owl-loaded owl-drag');
            if (viewport < 970) {
            $('.users').addClass('owl-carousel owl-theme owl-loaded owl-drag');
          }
          });*/
        
    
  });