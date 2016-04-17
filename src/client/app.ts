import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {GifFinderApp} from './app/gif-finder';

bootstrap(GifFinderApp, [
  HTTP_PROVIDERS
]);
