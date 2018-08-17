let url = 'http://localhost:8080/';
const fs = require('fs');
const puppeteer = require('puppeteer');
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({width: 414, height: 736, isMobile: true});
    await page.goto(url);
    await page.click('.home-enter-btn');
    await page.click('.card.can-click');
    await page.screenshot({path: 'dist/consult_41963767.png'});
    await browser.close();
})();