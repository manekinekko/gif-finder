import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {GifFinderApp} from '../app/gif-finder';

beforeEachProviders(() => [GifFinderApp]);

describe('App: GifFinder', () => {
  it('should have the `defaultMeaning` as 42', inject([GifFinderApp], (app: GifFinderApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([GifFinderApp], (app: GifFinderApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

