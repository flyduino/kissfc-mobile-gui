var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        changeLanguage();
    },
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();