$( document ).ready(function (){
    $(".button-collapse").sideNav();
    // var body = document.body,
    // doc = document.documentElement;
    // $(window).scroll(function () {
    //     // body.style.backgroundPosition = "0px";
    //     // body.style.backgroundPosition = "0px" + ((Math.max(doc.scrollTop, body.scrollTop))/20 ) + "px";
    // });
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav-extended').addClass('shrink');
    } else {
        $('.nav-extended').removeClass('shrink');
    }
});

function move(value) {
    var target = $("#" + value);
    $('html,body').animate({scrollTop: target.offset().top - 125}, 2000);
    $('.button-collapse').sideNav('hide');
}