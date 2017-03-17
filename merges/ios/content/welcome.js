'use strict';

CONTENT.welcome = {};

CONTENT.welcome.initialize = function (callback) {
    var self = this;
    
    if (GUI.activeContent != 'welcome') {
        GUI.activeContent = 'welcome';
    }

    $('#content').load("./content/welcome.html", htmlLoaded);
    

    function htmlLoaded() {
	$('a[data-lang="'+$.i18n.locale+'"]').addClass('selected-language');
        
        $(".language").on("click", function() {
           var lang = $(this).data("lang");
           $.i18n.locale = lang;
           setLanguage(lang);
           changeLanguage();
           $('a[data-lang]').removeClass('selected-language');
           $('a[data-lang="'+$.i18n.locale+'"]').addClass('selected-language');
        });
    }
};

CONTENT.welcome.cleanup = function (callback) {
    if (callback) callback();
};
