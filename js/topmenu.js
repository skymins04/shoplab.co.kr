var topmenu = false;
var sidemenu = false;

$(window).on('scroll', function() {
    if($(this).scrollTop() >= 70) {
        console.log('down');
        $('.header-fix').stop().animate({top: 0}, 500);
        $('.goto-top').css('display', 'block').stop().animate({opacity: 1}, 500);
        topmenu = true;
    }
    else if(topmenu && $(this).scrollTop() < 70){
        console.log('up');
        if(topmenu) {
            $('.header-fix').stop().animate({top: '-22%'}, 500);
            $('.goto-top').stop().animate({opacity: 0}, 500, function() {$('.goto-top').css('display', 'none')});
            topmenu = false;
        }
    }
});

$('.hambuger').on('click', function() {
    console.log('hello world');
    if(!sidemenu) {
        $('html, body').css('overflow-y', 'hidden');
        $('.hambuger-menu').css('display', 'block').stop().animate({opacity: 1}, 200);
        $('.hambuger-menu .content').stop().animate({right: 0}, 500);
        $('.semi-header .title span').css('color', '#2C81CA');

        $('.hambuger span:nth-child(1)').css('transform', 'translateY(13px) rotate(45deg)');
        $('.hambuger span:nth-child(2)').css('transform', 'translateX(200px)');
        $('.hambuger span:nth-child(3)').css('transform', 'translateY(-13px) rotate(-45deg)');
        $('.hambuger span').css('background-color', 'black');

        sidemenu = true;
    }
    else {
        $('html, body').css('overflow-y', 'initial');
        $('.hambuger-menu .content').stop().animate({right: '-500px'}, 500);
        $('.hambuger-menu').stop().animate({opacity: 0}, 200, function() {$('.hambuger-menu').css('display', 'none')});
        $('.semi-header .title span').css('color', 'white');

        $('.hambuger span:nth-child(1)').css('transform', 'translateY(0) rotate(0)');
        $('.hambuger span:nth-child(2)').css('transform', 'translateX(0)');
        $('.hambuger span:nth-child(3)').css('transform', 'translateY(0) rotate(0)');
        $('.hambuger span').css('background-color', 'white');

        sidemenu = false;
    }
});

$('.goto-top').on('click', function() {
    $('html, body').stop().animate({scrollTop: 0}, 500);
});