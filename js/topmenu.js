var flag = false;

$(window).on('scroll', function() {
    if($(this).scrollTop() >= 150) {
        console.log('down');
        $('.header-fix').stop().animate({top: 0}, 500);
        flag = true;
    }
    else if(flag && $(this).scrollTop() < 150){
        console.log('up');
        if(flag) {
            $('.header-fix').stop().animate({top: '-22%'}, 500);
            flag = false;
        }
    }
});
