$(document).ready(function(){
    "use strict";
    
    /* Change navbar background color */
    $(window).on("scroll",function(){
        var bodyheight = $(window).scrollTop();
        var navheight = $("nav").offset().top;
        if(bodyheight > 63){
            $("nav").addClass("bg");
        }
        else{
            $("nav").removeClass("bg");
        }
        
        
        /* Add active class to navbar links */
        $(".block").each(function(){
            
            if(bodyheight > $(this).offset().top-63){
                $(".head .navbar ul li a").removeClass("active");
                var blockid = $(this).attr("id");
                $('.head .navbar ul li a[data-scroll="'+ blockid+'"]').addClass("active");
                console.log(blockid);
            }
            
        });
        
        /* scroll to top icon */
        
         if(bodyheight > 600){
             if($(".scroll-to-top").is(":hidden")){
                  $(".scroll-to-top").fadeIn(1000);
             } 
         }
        else{
             $(".scroll-to-top").fadeOut(1000);
         } 
    });
    
    $(".head .navbar ul li a").click(function(e){ 
       e.preventDefault();
        
       
      $("html,body").animate({
          scrollTop:$("#" + $(this).data("scroll")).offset().top -60
      },1000);
   });
    
    
    $(".scroll-to-top").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0
        },1000);
    });
    
     $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    dots:true,
    nav:false,
    smartSpeed:1000,
    autoplayTimeout:3000,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
    
    
    $(".shedule-days ul li").on('click',function(){
       
        $(this).addClass('active').siblings().removeClass('active');
        
        $('.content-list > div').hide();
        
       $($(this).data('content')).fadeIn();
        
    });
});
    
    
