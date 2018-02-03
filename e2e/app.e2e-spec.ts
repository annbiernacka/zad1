import { ApkPage } from './app.po';

describe('apk App', function() {
  let page: ApkPage;

  beforeEach(() => {
    page = new ApkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
