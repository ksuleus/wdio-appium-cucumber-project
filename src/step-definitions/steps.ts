import { When } from '@wdio/cucumber-framework';

When('I open YouTube', async () => {
    await browser.url(`https://www.youtube.com/`);
});
