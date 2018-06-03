const puppeteer = require('puppeteer');


describe('The Nav Bar', () => {
  it('should have an initial title of "Caravan"', async (done) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('span.PageTitle');
    const menuTitle = await page.$eval('span.PageTitle', el => el.innerText);
    await browser.close();
    expect(menuTitle).toBe('Caravan');
    done();
  });
});
