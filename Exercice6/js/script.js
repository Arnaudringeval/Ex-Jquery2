$("#on").click(function() {
    jQuery.fx.off = false;
});
$("#off").click(function() {
    jQuery.fx.off = true;
});
$("#animation").click(function() {
    $("div").toggle(1000);
});