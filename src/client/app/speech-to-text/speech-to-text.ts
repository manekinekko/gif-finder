import {Component, NgZone, EventEmitter, Output, ViewEncapsulation} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
// import {SpeechEngine, SpeechErrors} from './../speech-engine/speech-engine';
import {HTML5SpeechEngine, SpeechErrors} from 'angular2-speech-engine';

@Component({
  selector: 'speech-to-text',
  templateUrl: 'app//speech-to-text/speech-to-text.html',
  styleUrls: ['app//speech-to-text/speech-to-text.css'],
  providers: [HTML5SpeechEngine],
  directives: [MdButton],
  pipes: []
})
export class SpeechToText {

  @Output('onResult') word$: EventEmitter<string> = new EventEmitter<string>();
  @Output('onError') hint$: EventEmitter<string> = new EventEmitter<string>();
  private icon_status: string = 'mic_none';

  constructor(private engine: HTML5SpeechEngine) {

    this.engine.toRx().errors.subscribe(
      (values) => {
        console.log('error', values);

        switch(values) {
          case SpeechErrors.NoMic:
            this.icon_status = 'mic_off';
            this.hint$.emit('No MIC detected');
            break;
          case SpeechErrors.NoSpeech:
            this.hint$.emit('Sorry! I did not understand you');
            break;
          case SpeechErrors.Blocked:
            this.hint$.emit('This app has been blocked. Check your preferences...');
            this.icon_status = 'mic_none';
            break;
          case SpeechErrors.Denied:
            this.hint$.emit('This app has been denied. Check your preferences...');
            this.icon_status = 'mic_none';
            break;
          default:
            this.icon_status = 'mic_none';
        };

      },
      (error) => {},
      (done) => this.icon_status = 'mic_none'
    );

    this.engine.toRx().values.subscribe(
      (data) => {
        if(data.type === 'tag') {
          console.log('tag', data.value);
          this.word$.emit(data.value);
        }
        else if(data.type === 'hint') {
          console.log('hint', data.value);
          this.hint$.emit(data.value);
        }
      },
      (error) => this.icon_status = 'mic_none',
      (done) => this.icon_status = 'mic_none'
    );
  }

  toggle(event) {
    this.engine.toggle(event);
    if(this.icon_status === 'mic_none') {
      this.hint$.emit('Listening...');
      this.icon_status =  'mic';
    } else {
      this.icon_status =  'mic_none';
      this.hint$.emit('Tap on image to randomize');
    }
  }

}
