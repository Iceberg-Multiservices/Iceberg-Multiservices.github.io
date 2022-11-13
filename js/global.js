jQuery(function ($) {
    $.i18n({
        locale: 'pap',
    }).load({
        eng: './js/i18n/eng.json',
        nld: './js/i18n/nld.json',
        pap: './js/i18n/pap.json',
        spa: './js/i18n/spa.json',
    }).done(function () {
        function setLocale(locale) {
            $.i18n().locale = locale;

            switch (locale) {
                case 'eng':
                    $('button.switch-language img').attr('src', '/img/index/languages/english.png');
                    break;
                case 'nld':
                    $('button.switch-language img').attr('src', '/img/index/languages/dutch.png');
                    break;
                case 'pap':
                    $('button.switch-language img').attr('src', '/img/index/languages/papiamento.png');
                    break;
                case 'spa':
                    $('button.switch-language img').attr('src', '/img/index/languages/spanish.png');
                    break;
            }

            $('body').i18n();
        }

        $('button.language').click(function (e) {
            setLocale($(this).data('locale'));
        });

        setLocale($.i18n().locale);
    });
});