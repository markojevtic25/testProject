$(document).ready(function(){
    $('.owl-features').owlCarousel({
       /* loop:true,
        nav:true,
        dots:false,
       autoHeight: true,
        autoWidth: true,
        margin: 46,
        items:4,
        stagePaddingLeft: 200,
        responsive:{
          0:{
            center: true,
            items:1
          },
          970:{
            center: true,
            items:1
          },
          1250:{
            center:true,
            items:3
          }
        } */
        loop:true,
        margin:46,
        autoWidth: true,
        nav:true,
        dots:true,
        items:4,
        responsive:{
          0:{
            center: true,
            items:1,
            autoWidth:false,
            autoplayTimeout:3000,
            autoplayHoverPause:true
          },
         500:{
            center: true,
            items:1,
            autoplayTimeout:3000,
            autoplayHoverPause:true
          },
          970:{
            center: true,
            items:3,
            autoplayTimeout:3000,
            autoplayHoverPause:true
          }
        }
      });

      $('.owl-users').owlCarousel({
        loop:true,
        margin:200,
        nav:true,
        items:1,
        dots:true,
        responsive:{
          0:{
            center: true,
            items:1,
            autoplay:false,
            autoplayTimeout:5000,
            autoplayHoverPause:true,

          }
        }
      });
  });