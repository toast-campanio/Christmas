$(function(){
    $('.slide-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        responsive: [
          {
            breakpoint: 767,     // 600〜1023px
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1,
            }
          }]
      });
    $(".toast").click(function(){
      $(this).css('color','#EBCA1B');
    });
    
    
    $('.qa-list-item').click(function() {
      var $answer = $(this).find('.answer');
        if($answer.hasClass('open')) { 
           $answer.removeClass('open');
           $answer.slideUp();
    
          $(this).find(".plus").html('<img src="img/plus.svg">');
          
        } else {
          
          $answer.addClass('open'); 
          $answer.slideDown("slow");
          
          $(this).find(".plus").html('<img src="img/minus.svg">');
        }
      });

    
      $(".nav").click(
        function(){
        $(".nav").removeClass("nav-active");
        $(this).addClass('nav-active');
      });
    
    
      $(".go").click(function(){
        var id=$(this).attr("href");
        var position=$(id).offset().top;
        $("html,body").animate({scrollTop:position},700);
      });
});

jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.floating').show("slow");
  } else {
    jQuery('.floating').hide();
  }
});

jQuery('.floating').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
new WOW().init();
