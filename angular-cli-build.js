/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [

      'zone.js/dist/zone.js',
      'reflect-metadata/Reflect.js',
      'systemjs/dist/system.js',
      'rxjs/**/*.{js,map}',

      '@angular2-material/core/core.js',
      '@angular2-material/toolbar/toolbar.js',
      '@angular2-material/card/card.js',
      '@angular2-material/button/button.js',

      '@angular/testing/**/*.{js,map}',
      '@angular/common/**/*.{js,map}',
      '@angular/compiler/**/*.{js,map}',
      '@angular/core/**/*.{js,map}',
      '@angular/http/**/*.{js,map}',
      '@angular/router/**/*.{js,map}',
      '@angular/platform-browser/**/*.{js,map}',
      '@angular/platform-browser-dynamic/**/*.{js,map}',

      'angular2-speech-engine/dist/**/*.js'
    ]
  });
  return app;
};
