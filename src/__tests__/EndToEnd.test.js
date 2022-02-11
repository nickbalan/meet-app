import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250, // slow down by 250ms
});

describe('show/hide an event details', async () => {

    beforeAll(async () => {
        jest.setTimeout(5000000);
    });
    
    test('An event element is collapsed by default', async () => {
        const browser = await puppeteer.launch();
    
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
    
        await page.waitForSelector('.event');
    
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
        browser.close();
      });

});