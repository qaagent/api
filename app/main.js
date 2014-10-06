define(function(require) {

    var pluginModule = require('./plugin-module');
    var messagingModule = require('./messaging-module');

    pluginModule.isInstalled();

    var a = function(){};

    messagingModule.addEventListener(a);

    messagingModule.process(1, "open", "http://abv.bg", "Open url");


});
