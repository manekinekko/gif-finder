import {Component} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {GifImage} from './gif-image/gif-image';
import {SpeechToText} from './speech-to-text/speech-to-text';
import {API} from './api/api';
import {IS_SPEECH_SUPPORTED} from './config'

@Component({
  selector: 'gif-finder-app',
  templateUrl: 'app/gif-finder.html',
  styleUrls: ['app/gif-finder.css'],
  directives: [GifImage, SpeechToText, MdToolbar]
})
export class GifFinderApp {

  private tag: string;
  private hint: string;
  private is_speeech_supported;

  contructor(){
    this.is_speeech_supported = IS_SPEECH_SUPPORTED;
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
