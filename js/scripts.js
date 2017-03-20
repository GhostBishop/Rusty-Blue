$(document).ready(function(){
  $('#fadein').fadeIn(400);
});

$(window).scroll(function(){
  var scroll = $(window).scrollTopx();
  if (scroll <= 500) {
    $(".navbar-transparent").removeClass(".navbar-transparent").addClass("dark-navbar").addClass("navbar-fixed-top");
  }
});
