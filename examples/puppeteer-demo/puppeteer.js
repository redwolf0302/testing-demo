let url = 'http://localhost:8080/';
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({width: 414, height: 736, isMobile: true});
    await page.goto(url);
    await page.screenshot({path: 'consult_41963767.png'});
    await browser.close();
})();