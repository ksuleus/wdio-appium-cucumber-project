import { When } from '@wdio/cucumber-framework';

When('I open YouTube in browser', async () => {
    await browser.url(`https://www.youtube.com/`);
});

//Placeholder step: this step is reserved for verification native app test run.
When('I open native YouTube application', async () => { });
