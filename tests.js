define(function (require) {

    var messagingModule = require('app/messaging-module');

    var settings = new Object();
    settings.elementSearchTimeOut = 1000;
    settings.annotate = true;
    settings.delayBeforeCommandExecution = 0;
    settings.delayBeforeExecution = 500;
    settings.closeOnComplete = true;
    
    messagingModule.setSettings(settings);
    
    messagingModule.addEventListener(function(msg){
        console.log("geleeee");
    });

    describe('TestMath', function () {

        before(function () {

        });

        after(function () {

        });

        it('should sum correctly 1', function () {
            messagingModule.process(1, "open", "http://qaagent.com/ide/test.html", "Open url");
            messagingModule.process(1, "*", "$('#test1input').val('test')", "Enter text");
            messagingModule.process(1, "*", "$('body > div > button').click()", "Click the button");
            messagingModule.process(1, "*", "$('#test1label').hasValue('test')", "Verify label value");
            messagingModule.process(1, "end", "end", "end");
        });

        it('should sum correctly 2', function () {
            messagingModule.process(2, "open", "http://qaagent.com/ide/test.html", "Open url");
            messagingModule.process(2, "*", "$('#test1input').val('test')", "Enter text");
            messagingModule.process(2, "*", "$('body > div > button').click()", "Click the button");
            messagingModule.process(2, "*", "$('#test1label').hasValue('test')", "Verify label value");
            messagingModule.process(2, "end", "end", "end");
        });
        
        it('should sum correctly 3', function () {
            messagingModule.process(3, "open", "http://qaagent.com/ide/test.html", "Open url");
            messagingModule.process(3, "*", "$('#test1input').val('test')", "Enter text");
            messagingModule.process(3, "*", "$('body > div > button').click()", "Click the button");
            messagingModule.process(3, "*", "$('#test1label').hasValue('test')", "Verify label value");
            messagingModule.process(3, "end", "end", "end");
        });
        
        it('should sum correctly 4', function () {
            messagingModule.process(4, "open", "http://qaagent.com/ide/test.html", "Open url");
            messagingModule.process(4, "*", "$('#test1input').val('test')", "Enter text");
            messagingModule.process(4, "*", "$('body > div > button').click()", "Click the button");
            messagingModule.process(4, "*", "$('#test1label').hasValue('test')", "Verify label value");
            messagingModule.process(4, "end", "end", "end");
        });

        it('should sum correctly 5', function () {
            messagingModule.process(5, "open", "http://qaagent.com/ide/test.html", "Open url");
            messagingModule.process(5, "*", "$('#test1input').val('test')", "Enter text");
            messagingModule.process(5, "*", "$('body > div > button').click()", "Click the button");
            messagingModule.process(5, "*", "$('#test1label').hasValue('test')", "Verify label value");
            messagingModule.process(5, "end", "end", "end");
        });
        
        it('should sum correctly 6', function () {
            messagingModule.process(6, "open", "http://qaagent.com/ide/test.html", "Open url");
            messagingModule.process(6, "*", "$('#test1input').val('test')", "Enter text");
            messagingModule.process(6, "*", "$('body > div > button').click()", "Click the button");
            messagingModule.process(6, "*", "$('#test1label').hasValue('test')", "Verify label value");
            messagingModule.process(6, "end", "end", "end");
        });

    });

});