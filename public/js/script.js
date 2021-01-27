$(document).ready(function(){
    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('.head').addClass('sticky');
        } else {
            $('.head').removeClass('sticky');
        }
    }, {
            offset: '60px'
        });

    $('.js--section-features2').waypoint(function (direction) {
        if (direction == 'down') {
            $('.head').addClass('sticky');
        } else {
            $('.head').removeClass('sticky');
        }
    }, {
            offset: '160px'
        });
});