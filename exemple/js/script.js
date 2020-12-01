$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $("#top").addClass("fixed");
    } else {
        $("#top").removeClass("fixed");
    }
})


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $('#div1').animate({
            marginLeft: '250px'
        }, 1500)
    }
})