const puppeteer = require('puppeteer');

describe('Booleans', () => {
  it('Should be true', async (done) => {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const menuTitle = await page.$eval('span.PageTitle', el => el.innerText);
    await browser.close();
    expect(menuTitle).toBe('Caravan');
    done();
  });
});
