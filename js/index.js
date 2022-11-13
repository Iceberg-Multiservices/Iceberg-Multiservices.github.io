$(document).ready(function () {
    var activePortfolioId = 'portfolio-1';

    $(window).keyup(function (event) {
        if (event.key == 'Escape') {
            closeWindow();
        }
    });

    $('button.switch-language').click(function (event) {
        showWindow();
    });

    $('section.popup-bg').mousedown(function (event) {
        closeWindow();
    });

    $('section.popup-bg .window').mousedown(function (event) {
        event.stopPropagation();
    });

    $('button.close-window, button.language').click(function (event) {
        closeWindow();
    });

    /**
     * Bullet button for Portfolio.
     */
    $('button.bullet').click(function (event) {
        var previousPortfolioId = activePortfolioId;
        activePortfolioId = $(this).data('portfolio-id');

        if (activePortfolioId == previousPortfolioId) {
            return;
        }

        $('button.bullet').removeClass('active');
        $(this).addClass('active');

        $('#' + previousPortfolioId).fadeOut('slow', function () {
            $('#' + activePortfolioId).fadeIn('slow');
        });
    });

    function showWindow() {
        $('section.popup-bg').css('display', 'flex');
    }

    function closeWindow() {
        $('section.popup-bg').css('display', 'none');
    }
});
