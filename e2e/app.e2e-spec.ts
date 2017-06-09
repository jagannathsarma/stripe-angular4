import { PaymentPage } from './app.po';

describe('payment App', () => {
  let page: PaymentPage;

  beforeEach(() => {
    page = new PaymentPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
