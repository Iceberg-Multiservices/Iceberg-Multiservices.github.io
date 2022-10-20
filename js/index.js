$(document).ready(function () {
    var activePortfolioId = 'portfolio-1';

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
});
