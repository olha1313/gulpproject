$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    // autoplay: true
  });
});


const checkHeader = _.throttle(() => {
  console.log('checkHeader')
});


window.addEventListener('scroll', checkHeader);