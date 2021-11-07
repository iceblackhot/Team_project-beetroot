$(document).ready(() => {
    $('.welcome__btn-holder_btn').on('click', function () {
        if($('.hireme').hasClass('active')) {
            $('.hireme').removeClass('active');
        } else {
            $('.hireme').addClass('active');
        }
    })
});