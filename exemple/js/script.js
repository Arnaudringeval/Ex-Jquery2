$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $("#menu").addClass("fixed");
    } else {
        $("#menu").removeClass("fixed");
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