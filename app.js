requirejs.config({
    baseUrl: '',
    paths: {
        app: 'app',
        mocha: 'node_modules/mocha/mocha'
    }
});

define(function (require) {
    require('mocha');

    mocha.setup('bdd');

    require([
    'tests.js',
  ], function (require) {
        mocha.run();
    });

});
