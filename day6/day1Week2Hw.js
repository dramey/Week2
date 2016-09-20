$(function () {
    $("#add").click(function (ev) {
        var val = $('#song').val();
        $("ul").append('<li>' + val + '</li>')
        ev.preventDefault();
    });


    $("ul").click("remove", function (ev) {
        $(ev.target).parent().fadeOut();

    });

    $("h1").css({
        "font-family": "cursive",
        "text-align": "center",
        "background-color": "green",
        "color": "white",
        "font-size": "28px",
        "padding": "15px"
    });
    $("#makeFormPretty").css({
        "text-align": "center",
        "font-family": "cursive",
        "font-size": "20px",
    });

});

