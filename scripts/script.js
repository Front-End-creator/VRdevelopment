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