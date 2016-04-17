export class GifFinderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gif-finder-app p')).getText();
  }
}
