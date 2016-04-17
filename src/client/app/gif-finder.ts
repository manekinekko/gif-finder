import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'gif-finder-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/gif-finder.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
])
export class GifFinderApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
