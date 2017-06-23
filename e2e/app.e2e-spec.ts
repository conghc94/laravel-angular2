import { DrinksFoodsPage } from './app.po';

describe('drinks-foods App', () => {
  let page: DrinksFoodsPage;

  beforeEach(() => {
    page = new DrinksFoodsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
