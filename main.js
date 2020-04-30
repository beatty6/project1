$(document).ready(function () {


    $("button#button-one").click(function () {
        var one = $("div#one");
        var sp = $("#sp");
        var zoom = $("#zoom");
        one.css({
            visibility: 'visible'
        }, 5000);
        one.animate({
            opacity: '1'
        }, "slow");
        one.animate({
            left: '100px'
        }, "slow");
        one.animate({
            fontSize: '3em'
        }, "slow");


        sp.animate({
            opacity: '1'
        }, 5000);
        zoom.animate({
            opacity: '1'
        }, 5000);
    });


});
