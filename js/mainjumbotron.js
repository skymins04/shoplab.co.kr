var imgs;
var imgs_count;
var imgs_position = 2;

var mainjumbotronWorker;

var setMainjumbotronWorker = function() {
    mainjumbotronWorker = setInterval(function() {
        if(imgs_position === 1) {
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_count})`).css('display', 'none');
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_count})`).css('opacity', '0');
        }
        else {
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_position-1})`).css('display', 'none');
            $(`.main-jumbotron .slideshow li:nth-child(${imgs_position-1})`).css('opacity', '0');
        }
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position})`).css('display', 'block');
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position})`).animate({opacity: 1}, 1000);
        
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
    }
    $(`.main-jumbotron .slideshow li:nth-child(${idx})`).css('display', 'block');
    $(`.main-jumbotron .slideshow li:nth-child(${idx})`).animate({opacity: 1}, 1000);
    imgs_position = idx;
    viewStatusBar();
    imgs_position = idx === imgs_count ? 1 : idx+1;
    setMainjumbotronWorker();
});

/*$('#back-btn').on('click', function() {
    $(`.main-jumbotron .slideshow li:nth-child(${imgs_position})`).css('display', 'none');
    $(`.main-jumbotron .slideshow li:nth-child(${imgs_position})`).css('opacity', '0');
    if(imgs_position === 1) {
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_count})`).css('display', 'block');
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_count})`).animate({opacity: 1}, 1000);
        imgs_position = imgs_count;
    } else {
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position-1})`).css('display', 'block');
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position-1})`).animate({opacity: 1}, 1000);
        imgs_position -= 1;
    }
    clearInterval(mainjumbotronWorker);
    setMainjumbotronWorker();
    viewStatusBar();
});

$('#next-btn').on('click', function() {
    $(`.main-jumbotron .slideshow li:nth-child(${imgs_position})`).css('display', 'none');
    $(`.main-jumbotron .slideshow li:nth-child(${imgs_position})`).css('opacity', '0');
    if(imgs_position === imgs_count) {
        $(`.main-jumbotron .slideshow li:nth-child(${1})`).css('display', 'block');
        $(`.main-jumbotron .slideshow li:nth-child(${1})`).animate({opacity: 1}, 1000);
        imgs_position = 1;
    } else {
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position+1})`).css('display', 'block');
        $(`.main-jumbotron .slideshow li:nth-child(${imgs_position+1})`).animate({opacity: 1}, 1000);
        imgs_position += 1;
    }
    clearInterval(mainjumbotronWorker);
    setMainjumbotronWorker();
    viewStatusBar();
});*/

var viewStatusBar = function() {
    for(var i = 0; i < imgs_count; i++) {
        $(`.main-jumbotron .slidecontrol .statusbar ul li:nth-child(${i+1}) .dot`).removeClass('mainjumbotron-activedot');
        $(`.main-jumbotron .slidecontrol .statusbar ul li:nth-child(${i+1}) .text`).removeClass('mainjumbotron-activetext');
    }
    $(`.main-jumbotron .slidecontrol .statusbar ul li:nth-child(${imgs_position}) .dot`).addClass('mainjumbotron-activedot');
    $(`.main-jumbotron .slidecontrol .statusbar ul li:nth-child(${imgs_position}) .text`).addClass('mainjumbotron-activetext');
}