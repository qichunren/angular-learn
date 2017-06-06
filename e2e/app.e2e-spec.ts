import { AngularLearnPage } from './app.po';

describe('angular-learn App', () => {
  let page: AngularLearnPage;

  beforeEach(() => {
    page = new AngularLearnPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
