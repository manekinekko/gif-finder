import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {SpeechEngine} from './speech-engine';


describe('SpeechEngine Service', () => {

  beforeEachProviders(() => [SpeechEngine]);


  it('should ...', inject([SpeechEngine], (service: SpeechEngine) => {

  }));

});
