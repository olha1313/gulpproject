$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    // autoplay: true
  });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "10px 10px";
    document.getElementById("blue-logo").style.height = "25px";
    document.getElementById("blue-logo").style.width = "125px";
  } else {
    document.getElementById("header").style.padding = "30px 10px";
    document.getElementById("blue-logo").style.height = "40px";
    document.getElementById("blue-logo").style.width = "162px";
  }
}