define(function() {

    var settings = {};

    return {

        setSettings: function(settings) {

            this.settings = settings;
        },

        validate: function(message) {

            return typeof(message.to) !== "undefined" && typeof(TAG) !== "undefined" && message.to === TAG;
        },

        addEventListener: function(callback) {

            var that = this;

            window.addEventListener("message", function(event) {
                // We only accept messages from ourselves
                // Since there is a lot of communication in this chanel (this is the main messaging channel of the browser itself)
                // we need to filter all incoming messages based on several conditions. We just discard messages that are not for us.
                // This is the first check.
                if (event.source != window)
                    return;

                // Get message data
                var msg = event.data;

                if (that.validate(msg)) {

                    that.parse(msg);

                    //Pass message to the web page
                    callback(msg);
                }

            }, false);
        },

        //Parse all message attributes and their values
        parse: function(message) {
            //Message content which will be logged into browser console
            var messageInfo = "IDE ";

            //Iterate through all the message attributes
            for (var key in message) {

                //Get attribute
                var value = message[key];

                //Apend attribute name and its value
                messageInfo += "| " + key + ": " + value + "  ";
            }

            //Add the message info into browser console
            console.log(messageInfo);
        },

        process: function(id, command, action, text) {

            //Message to be sent to content script
            var message = {

                to: "C_S",
                command: command,
                action: action,
                text: text,
                tcid: id,
                settings: settings
            };

            //Show message structure in the browser console
            this.parse(message);

            //Post message go the content script
            window.postMessage(message, "*");
        }
    };

});
