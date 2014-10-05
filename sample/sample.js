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
    var executor1 = new ExtAPI(1, settings, rxMessage);
    var executor2 = new ExtAPI(2, settings, rxMessage);
    var executor3 = new ExtAPI(3, settings, rxMessage);

    executeCode1();
    executeCode2();
    executeCode3();
    // //Check whether the extension is installed
    // if (typeof(executor.version()) === "undefined") {
    //     textContent.innerHTML = "<p>Please load the chrome extension first! If you don't know how - <a href='https://developer.chrome.com/extensions/getstarted#unpacked' target='_blank'>check this out</a></p>"
    // } else {
    //     var version = document.getElementById("qaagent-ide").textContent;
    //     textContent.innerHTML = "<p>Great! You managed to set up qa-agent-ext! Your extnsion version is " + version + "</p>";


    // }

    function executeCode1() {
        executor1.open("http://qaagent.com/ide/test.html", settings);
        executor1.execute("*", "$('#test1input').val('test')", "Enter text");
        executor1.execute("*", "$('body > div > button').click()", "Click the button");
        executor1.execute("*", "$('#test1label').hasValue('test')", "Verify label value");
        executor1.end();
    }

    function executeCode2() {
        executor2.open("http://qaagent.com/ide/test.html", settings);
        executor2.execute("*", "$('#test1input').val('test')", "Enter text");
        executor2.execute("*", "$('body > div > button').click()", "Click the button");
        executor2.execute("*", "$('#test1label').hasValue('test')", "Verify label value");
        executor2.end();
    }

    function executeCode3() {
        executor3.open("http://qaagent.com/ide/test.html", settings);
        executor3.execute("*", "$('#test1input').val('test')", "Enter text");
        executor3.execute("*", "$('body > div > button').click()", "Click the button");
        executor3.execute("*", "$('#test1label').hasValue('test')", "Verify label value");
        executor3.end();
    }

    function rxMessage(message) {
        textContent.innerHTML += "<p><b>" + message.tcid + "</b>Your code execution was completed successfuly! Action: <b>" + message.text + "</b></p>";
    }

    function generateId() {
        return Math.floor((Math.random() * 100) + 1);
    }
}