import { LazyRoutesPage } from './app.po';

describe('lazy-routes App', function() {
  let page: LazyRoutesPage;

  beforeEach(() => {
    page = new LazyRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
