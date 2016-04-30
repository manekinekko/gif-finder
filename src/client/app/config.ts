import {OpaqueToken} from '@angular/core';

export let IS_SPEECH_SUPPORTED = new OpaqueToken(`${'webkitSpeechRecognition' in window}`);
