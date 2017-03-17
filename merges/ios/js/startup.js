var app = {
    initialize: function() {
        console.log("Initialize");
        this.bindEvents();
        
    },
    bindEvents: function() {
        console.log("BindEvents");
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        console.log("On device ready");
        changeLanguage();
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

console.log("startup.js");
app.initialize();