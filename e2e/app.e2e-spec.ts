import { DepPage } from './app.po';

describe('dep App', () => {
  let page: DepPage;

  beforeEach(() => {
    page = new DepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
