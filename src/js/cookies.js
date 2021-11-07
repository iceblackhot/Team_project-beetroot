$(document).ready(() => {
    $('.pop-up-cookies__btn').on('click', function () {
        if($('.vasylkov-popup').hasClass('visible')) {
            $('.vasylkov-popup').removeClass('visible');
        } else {
            $('.vasylkov-popup').addClass('visible');
        }
    })
});