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
} from '@angular/testing';
import {provide} from '@angular/core';
import {API} from './api';


describe('API Service', () => {

  beforeEachProviders(() => [API]);


  it('should ...', inject([API], (service: API) => {

  }));

});
