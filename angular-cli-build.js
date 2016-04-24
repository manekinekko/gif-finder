/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      '@angular2-material/core/core.js',
      '@angular2-material/toolbar/toolbar.js',
      '@angular2-material/card/card.js',
      '@angular2-material/button/button.js',
      'angular2-speech-engine/dist/angular2-speech-engine.js',
      'angular2-speech-engine/dist/src/core.js',
      'angular2-speech-engine/dist/src/engine/abstract-speech-engine.js',
      'angular2-speech-engine/dist/src/engine/native-speech-engine.js'
    ]
  });
  return app;
};
