var imgs;
var imgs_count;
var imgs_position = 2;

var mainjumbotronWorker;

var setMainjumbotronWorker = function() {
    mainjumbotronWorker = setInterval(function() {
        if(imgs_position === 1) {
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_count})`).css('display', 'none');
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_count})`).css('opacity', '0');
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_count}) .text h1`).css('margin-left', '200px');
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_count}) .text div`).css('margin-left', '200px');
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_count}) .text .more-btn`).css('margin-left', '200px');
        }
        else {
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_position-1})`).css('display', 'none');
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_position-1})`).css('opacity', '0');
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_position-1}) .text h1`).css('margin-left', '200px');
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_position-1}) .text div`).css('margin-left', '200px');
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_position-1}) .text .more-btn`).css('margin-left', '200px');
        }
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position})`).css('display', 'block');
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position})`).animate({opacity: 1}, 1000);
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position}) .text h1`).animate({marginLeft: 0}, 500);
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position}) .text div`).animate({marginLeft: 0}, 600);
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position}) .text .more-btn`).animate({marginLeft: 0}, 650);
        
        viewStatusBar();
        if(imgs_position === imgs_count) imgs_position = 1;
        else imgs_position += 1;
    }, 5000);
}

$(document).ready(function(){
    imgs = $(".main-jumbotron .slideshow");
    imgs_count = imgs.children().length;

    setMainjumbotronWorker();
});

$('.statusbar ul li .dot').on('click', function(e) {
    var t = $(e.target);
    var idx = t.closest('li').index() + 1
    clearInterval(mainjumbotronWorker);
    for(var i = 0; i < imgs_count; i++) {
        $(`.main-jumbotron .slideshow li:nth-child(${i+1})`).css('display', 'none');
        $(`.main-jumbotron .slideshow li:nth-child(${i+1})`).css('opacity', '0');
        $(`.main-jumbotron .slideshow li:nth-child(${i+1}) .text h1`).css('margin-left', '200px');
        $(`.main-jumbotron .slideshow li:nth-child(${i+1}) .text div`).css('margin-left', '200px');
        $(`.main-jumbotron .slideshow li:nth-child(${i+1}) .text .more-btn`).css('margin-left', '200px');
    }
    $(`.main-jumbotron .slideshow li:nth-child(${idx})`).css('display', 'block');
    $(`.main-jumbotron .slideshow li:nth-child(${idx})`).animate({opacity: 1}, 1000);
    $(`.main-jumbotron .slideshow li:nth-child(${idx}) .text h1`).animate({marginLeft: 0}, 500);
    $(`.main-jumbotron .slideshow li:nth-child(${idx}) .text div`).animate({marginLeft: 0}, 600);
    $(`.main-jumbotron .slideshow li:nth-child(${idx}) .text .more-btn`).animate({marginLeft: 0}, 650);
    imgs_position = idx;
    viewStatusBar();
    imgs_position = idx === imgs_count ? 1 : idx+1;
    setMainjumbotronWorker();
});

var viewStatusBar = function() {
    for(var i = 0; i < imgs_count; i++) {
        $(`.main-jumbotron .slidecontrol .statusbar ul li:nth-child(${i+1}) .dot`).removeClass('mainjumbotron-activedot');
        $(`.main-jumbotron .slidecontrol .statusbar ul li:nth-child(${i+1}) .text`).removeClass('mainjumbotron-activetext');
    }
    $(`.main-jumbotron .slidecontrol .statusbar ul li:nth-child(${imgs_position}) .dot`).addClass('mainjumbotron-activedot');
    $(`.main-jumbotron .slidecontrol .statusbar ul li:nth-child(${imgs_position}) .text`).addClass('mainjumbotron-activetext');
}

