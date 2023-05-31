$(function() {
  "use strict";

  $(window).scroll(function(e){
    updateAdPosition(e);
  });

  $('.menu').click(function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-active');
    $('.menu-animated-background').toggleClass('menu-animated-background-active');
    $('.menu-navigation').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });

  // affix

  $(function(){
      $(".element").typed({
        strings: ["Branding ^1000 stuff. ", "Cool ^1000Websites.^2200", "UI/^800UX."],
        typeSpeed: 10,
        backDelay: 800,

      });
  });
});
