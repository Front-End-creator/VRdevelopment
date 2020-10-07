$(window).scroll(function(){
    $('.navbackground').addClass('animation');
    if ( $(window).scrollTop() > 0) {
        $('.navbackground').addClass('animation').removeClass('removeanimation');
        $('#logo img').addClass('animation2').removeClass('removeanimation2');
    } else {
        $('.navbackground').removeClass('animation').addClass('removeanimation'); 
        $('#logo img').removeClass('animation2').addClass('removeanimation2');
}
});

$(document).ready(function(){
    $("#navlist li").on("click",".ref, .link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});