import {OpaqueToken} from 'angular2/core';

export let IS_SPEECH_SUPPORTED = new OpaqueToken(`${'webkitSpeechRecognition' in window}`);
