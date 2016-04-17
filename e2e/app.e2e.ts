import { GifFinderPage } from './app.po';

describe('gif-finder App', function() {
  let page: GifFinderPage;

  beforeEach(() => {
    page = new GifFinderPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gif-finder Works!');
  });
});
