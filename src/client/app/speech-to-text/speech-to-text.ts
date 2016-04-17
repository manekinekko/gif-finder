import {Component, NgZone, EventEmitter, Output, ViewEncapsulation} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {SpeechEngine, SpeechErrors} from './../speech-engine/speech-engine';

@Component({
  selector: 'speech-to-text',
  templateUrl: 'app//speech-to-text/speech-to-text.html',
  styleUrls: ['app//speech-to-text/speech-to-text.css'],
  providers: [SpeechEngine],
  directives: [MATERIAL_DIRECTIVES],
  pipes: []
})
export class SpeechToText {

  @Output('onSpeechOK') word: EventEmitter<string> = new EventEmitter<string>();
  @Output('onSpeechKO') hint: EventEmitter<string> = new EventEmitter<string>();
  private icon_status: string = 'mic_none';

  constructor(private engine: SpeechEngine) {
    this.engine.toRx().subscribe(
      (value) => this.word.emit(value),
      (error) => {
        switch(error) {
          case SpeechErrors.NoMic:
            this.icon_status = 'mic_off';
            this.hint.emit('No MIC detected');
            break;
          case SpeechErrors.NoSpeech:
            this.hint.emit('Sorry! I did not understand you');
            break;
          case SpeechErrors.Blocked:
            this.hint.emit('This app has been blocked. Check your preferences...');
            break;
          case SpeechErrors.Denied:
            this.hint.emit('This app has been denied. Check your preferences...');
            break;
          default: this.icon_status = 'mic_none';
        }
      },
      (done) => this.icon_status = 'mic_none'
    );
  }

  toggle(event) {
    this.engine.toggle(event);
  }

  isRecognizing() {
    let status = this.engine.isRecognizing();
    this.icon_status = status ? 'mic' : 'mic_none';
    this.hint.emit('Listening...');
    return status;
  }

}
