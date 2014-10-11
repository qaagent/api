//TAG declaration is mandatory
var TAG = 'IDE';

window.onload = function() {

    var textContent = document.getElementById("text-content");

    var settings = new Object();
    settings.elementSearchTimeOut = 50000;
    settings.annotate = true;
    settings.delayBeforeCommandExecution = 10;
    settings.delayBeforeExecution = 50;
    settings.closeOnComplete = true;

    //Init ExtAPI object and provide a message processing callback
    var executor = new ExtAPI(settings, rxMessage);

    executeCode();

    // //Check whether the extension is installed
    // if (typeof(executor.version()) === "undefined") {
    //     textContent.innerHTML = "<p>Please load the chrome extension first! If you don't know how - <a href='https://developer.chrome.com/extensions/getstarted#unpacked' target='_blank'>check this out</a></p>"
    // } else {
    //     var version = document.getElementById("qaagent-ide").textContent;
    //     textContent.innerHTML = "<p>Great! You managed to set up qa-agent-ext! Your extnsion version is " + version + "</p>";


    // }

    function executeCode() {
        executor.open(1, "http://qaagent.com/ide/test.html", settings);
        executor.execute(1, "*", "$('#test1input').val('test')", "Enter text");
        executor.execute(1, "*", "$('body > div > button').click()", "Click the button");
        executor.execute(1, "*", "$('#test1label').hasValue('test')", "Verify label value");
        executor.end(1);
    }


    function rxMessage(message) {
        textContent.innerHTML += "<p><b>" + message.tcid + "</b>Your code execution was completed successfuly! Action: <b>" + message.text + "</b></p>";
    }

    function generateId() {
        return Math.floor((Math.random() * 100) + 1);
    }
}
