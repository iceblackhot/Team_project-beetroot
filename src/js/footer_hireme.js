
$(document).ready(() => {
   $('.footer__btn').on('click', function () {
     
       if($('.hireme').hasClass('active')) {
           $('.hireme').removeClass('active');
       } else {
           $('.hireme').addClass('active');
       }
   })
});


$(document).ready(() => {
   $('.hireme__close').on('click', function () {
     
       if($('.hireme').hasClass('active')) {
           $('.hireme').removeClass('active');
       } else {
           $('.hireme').addClass('active');
       }
   })
});

