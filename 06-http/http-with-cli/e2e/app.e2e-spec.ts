import { FormsWithCliPage } from './app.po';

describe('forms-with-cli App', () => {
  let page: FormsWithCliPage;

  beforeEach(() => {
    page = new FormsWithCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
