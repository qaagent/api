define(function (require) {

    var messagingModule = require('app/messaging-module');

    describe('TestMath', function () {

        before(function () {
            messagingModule.process(1, "open", "http://abv.bg", "Open url");
        });

        after(function () {

        });

        it('should sum correctly', function () {
            console.log('TEST');
        });

    });

});