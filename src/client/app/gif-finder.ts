import {Component} from 'angular2/core';
import {GifImage} from './gif-image/gif-image';
import {GifInput} from './gif-input/gif-input';
import {API} from './api/api';

@Component({
  selector: 'my-gif-finder',
  templateUrl: 'app/gif-finder.html',
  styles: [`
    md-content {margin-top: 40px}
  `],
  directives: [GifImage, GifInput]
})
export class GifFinderApp {

  private tag: string;
  private hint: string;

  contructor(){
    this.tag = '';
    this.hint = '';
  }

  updateTag(tag) {
    this.tag = tag;
  }

  updateHint(hint) {
    this.hint = hint;
  }

}
