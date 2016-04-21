import {Component, Output, EventEmitter} from 'angular2/core';
import {SpeechToText} from '../speech-to-text/speech-to-text';
import {IS_SPEECH_SUPPORTED} from '../config'

@Component({
  selector: 'gif-input',
  templateUrl: 'app//gif-input/gif-input.html',
  styleUrls: ['app//gif-input/gif-input.css'],
  providers: [],
  directives: [SpeechToText],
  pipes: []
})
export class GifInput {

  @Output('onSearch') search$: EventEmitter<string> = new EventEmitter<string>();
  @Output('onError') error$: EventEmitter<string> = new EventEmitter<string>();

  private is_speeech_supported;

  constructor() {
    this.is_speeech_supported = IS_SPEECH_SUPPORTED;
  }

  onChanged(e) {
    this.search$.emit(e.target.value);
  }

  onSpeechOK(tag) {
    this.search$.emit(tag);
  }

  onSpeechKO(hint) {
    this.error$.emit(hint);
  }

}
