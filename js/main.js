$(function(){
    $('a[href^="#"]').click(function() {
        var adjust = 0;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    $('.content_content_close') .on('click', function() {
        if ($(this).next().is(':hidden')) {
            $(this).next().slideDown(400, function() {
                $(this).parent().css('padding', '20px 0');

                const scrollTarget = $(this).parent().parent();
                const offsetTop = $(scrollTarget).offset().top;
                $('html, body').animate({ scrollTop: offsetTop }, 1000, "swing");
            });
        } else {
            $(this).next().slideUp(400, function() {
                $(this).parent().css('padding', '10px 0');
            });
        };

        $('.content_content_close').not($(this)).next().slideUp();
    });

    $('.modal-button').modaal();
});