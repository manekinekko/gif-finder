import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {GifFinderApp} from './app/gif-finder';

bootstrap(GifFinderApp, [
  HTTP_PROVIDERS
]).catch(err => console.error(err));
