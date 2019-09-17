$(document).ready(function(){
  $('.slider').slick({
    dots: true
    // autoplay: true
  });
});


window.scroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.scrollTop > 80) {
    document.getElementById("header").addClass('fixed');
    document.getElementById("blue-logo").style.height = "25px";
    document.getElementById("blue-logo").style.width = "125px";
  } else {
    document.getElementById("header").removeClass('fixed');
    document.getElementById("blue-logo").style.height = "40px";
    document.getElementById("blue-logo").style.width = "162px";
  }
}