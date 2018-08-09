let url = 'https://m.jk.cn/thors/consult/41963767';
const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     page.setViewport({width: 414, height: 736, isMobile: true});
//     await page.goto(url);
//     // await page.screenshot({path: 'consult_41963767.png'});
//     const imButton = await page.$('#ask_doctor_click');
//     await imButton.click();
//     await page.screenshot({path: 'consult_41963767.png'});
//     await browser.close();
// })();

puppeteer.launch().then(async browser => {
    // Store the endpoint to be able to reconnect to Chromium
    const browserWSEndpoint = browser.wsEndpoint();
    // Disconnect puppeteer from Chromium
    browser.disconnect();

    // Use the endpoint to reestablish a connection
    const browser2 = await puppeteer.connect({browserWSEndpoint});
    const page = await browser2.newPage();
    page.setViewport({width: 414, height: 736, isMobile: true});
    await page.goto(url);
    // Close Chromium
    await browser2.close();
});