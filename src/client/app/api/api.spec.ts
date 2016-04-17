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
import {API} from './api';


describe('API Service', () => {

  beforeEachProviders(() => [API]);


  it('should ...', inject([API], (service: API) => {

  }));

});
