var identifier = "qaagent-ide";
var CONTENTSCRIPT = 'C_S';

function ExtAPI(id, settings, callback) {

    //To enable plugin in your page add <div id="qaagent-ide" style="display: none;"></div> somewhere in the body
    var version;
    element = document.getElementById(identifier);

    if (element != "undefined" &&
        element != null &&
        element.id.length > 0 &&
        element.innerHTML.length > 0) {
        version = element.innerHTML;
    } else {
        alert("Please load the chrome extension first! For more details check this out ");
        var answer = confirm("Please load the chrome extension first.")
        if (answer) {
            window.location = "https://developer.chrome.com/extensions/getstarted#unpacked";
        }

    }


    //Parse all message attributes and their values
    function _parse(message) {
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
    }

    //Validate that the message is send to the appropreate receiver
    function _validateRxMsg(message) {

        return typeof(message.to) !== "undefined" && typeof(TAG) !== "undefined" && message.to === TAG;
    }

    window.addEventListener("message", function(event) {
        // We only accept messages from ourselves
        // Since there is a lot of communication in this chanel (this is the main messaging channel of the browser itself)
        // we need to filter all incoming messages based on several conditions. We just discard messages that are not for us.
        // This is the first check.
        if (event.source != window)
            return;

        // Get message data
        var msg = event.data;

        if (_validateRxMsg(msg)) {

            _parse(msg)

            //Pass message to the web page
            callback(msg);
        }

    }, false);

    //API functions

    // Send message to the content script
    this.execute = function(command, action, text) {

        //Message to be sent to content script
        var message = {

            to: CONTENTSCRIPT,
            command: command,
            action: action,
            text: text,
            tcid: id,
            settings: settings
        };

        //Show message structure in the browser console
        _parse(message);

        //Post message go the content script
        window.postMessage(message, "*");
    }

    this.open = function(url) {

        this.execute("open", url, "Open " + url);
    }

    this.end = function() {

        this.execute("end", "end", "end");
    }

    this.waitBrowserReady = function() {

        this.execute("waitBrowserReady", "*", "Wait browser");
    }

    return this;

}