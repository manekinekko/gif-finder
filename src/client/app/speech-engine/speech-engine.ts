import {NgZone, Injectable, EventEmitter} from 'angular2/core';

export enum SpeechErrors {
  NoSpeech,
  NoMic,
  Denied,
  Blocked
}

@Injectable()
export class SpeechEngine {

  private engine: any = null;
  private recognizing: boolean = false;
  private start_timestamp: number = 0;
  private transcript: string = '';
  private obs$: EventEmitter<string> = new EventEmitter<any>();

  constructor(private zone: NgZone) {
    this.create();
  }

  create() {
    this.engine = new webkitSpeechRecognition();
    this.engine.continuous = true;
    this.engine.lang = 'en-US';
    this.engine.onstart = this.onstart.bind(this);
    this.engine.onerror = this.onerror.bind(this);
    this.engine.onend = this.onend.bind(this);
    this.engine.onresult = this.onresult.bind(this);
  }

  toggle(event) {
    if (this.recognizing) {
      this.engine.stop();
      return false;
    }

    this.start_timestamp = event.timeStamp;
    this.engine.start();
    console.log('info_allow');
  }
  stop() {
    this.engine.stop();
  }
  toRx() {
    return this.obs$;
  }
  isRecognizing() {
    return this.recognizing;
  }

  private onstart() {
    console.log('reconizing');
    this.zone.run( () => this.recognizing = true);
  };

  private onerror(event) {
    this.zone.run( () => this.recognizing = false );

    if (event.error == 'no-speech') {
      console.error('info_no_speech');
      this.obs$.error(SpeechErrors.NoSpeech);
    }
    if (event.error == 'audio-capture') {
      console.error('info_no_microphone');
      this.obs$.error(SpeechErrors.NoMic);
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        console.error('info_blocked');
        this.obs$.error(SpeechErrors.Blocked);
      } else {
        console.error('info_denied');
        this.obs$.error(SpeechErrors.Denied);
      }
    }

  }

  private onend() {
    this.zone.run( () => this.recognizing = false );
    //this.obs$.complete();
  };

  private onresult(event) {
    this.zone.run( () => this.transcriptText(event) );
  }

  private transcriptText(event): string {
    if (typeof(event.results) == 'undefined') {
      this.engine.onend = null;
      this.engine.stop();
      return;
    }

    for (var i = event.resultIndex; i < event.results.length; ++i) {
      this.obs$.emit(event.results[i][0].transcript;);
    }
  }


}
