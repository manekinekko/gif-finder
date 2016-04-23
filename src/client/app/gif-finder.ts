import {Component} from 'angular2/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {GifImage} from './gif-image/gif-image';
import {GifInput} from './gif-input/gif-input';
import {API} from './api/api';

@Component({
  selector: 'gif-finder-app',
  templateUrl: 'app/gif-finder.html',
  styleUrls: ['app/gif-finder.css'],
  directives: [GifImage, GifInput, MdToolbar]
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
