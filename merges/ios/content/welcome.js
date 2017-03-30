'use strict';

CONTENT.welcome = {};

CONTENT.welcome.initialize = function (callback) {
    var self = this;
    
    if (GUI.activeContent != 'welcome') {
        GUI.activeContent = 'welcome';
    }

    GUI.load("./content/welcome.html", htmlLoaded);
    

    function htmlLoaded() {
    	 $("#language").val($.i18n.locale);
        
        $("#language").on("change", function() {
                          
           var lang = $(this).val();
                          console.log("Change " + lang);
           $.i18n.locale = lang;
           setLanguage(lang);
           changeLanguage();
        });
    }
};

CONTENT.welcome.cleanup = function (callback) {
    if (callback) callback();
};
