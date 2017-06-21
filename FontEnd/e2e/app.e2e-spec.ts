import { FontEndPage } from './app.po';

describe('font-end App', () => {
  let page: FontEndPage;

  beforeEach(() => {
    page = new FontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
