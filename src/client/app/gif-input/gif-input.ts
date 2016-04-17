import {Component} from 'angular2/core';


@Component({
  selector: 'gif-input',
  templateUrl: 'app//gif-input/gif-input.html',
  styleUrls: ['app//gif-input/gif-input.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class GifInput {

  @Output('onSearch') search: EventEmitter<string> = new EventEmitter<string>();
  @Output('onError') error: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.is_speeech_supported = IS_SPEECH_SUPPORTED;
  }

  onChanged(e) {
    this.search.emit(e.target.value);
  }

  onSpeechOK(tag) {
    this.search.emit(tag);
  }

  onSpeechKO(hint) {
    this.error.emit(hint);
  }

  /*

  this.results = someFormInput.valueChanges //observable of input changes
    .debounceTime(150) //debounce for 150ms
    .switchMap(query => http.get(`http://api.com?q=${query}`)) //make request
    .map(res => res.json()); //map to json

  */

}
