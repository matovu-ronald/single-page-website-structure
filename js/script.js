$(function () {
    $('#minimenu').click(function () {
        $('#nav').slideToggle();
    });


    $(window).bind('resize', function () {
        if ($('#minimenu').css('display') == 'block') {
            $('#nav').show();
        }else {
            $('#nav').hide();
        }
    });

    $('#nav ul li a').click(function (event) {
        var targetSection = $(this).attr('href');
        var scrollTo = $(targetSection).offset().top;
        $('html, body').animate({
            scrollTop: scrollTo
        }, 1000);

        if ($('#minimenu').css('display') == 'block') {
            $('#nav').slideUp();
        }

        event.preventDefault();
    });


});