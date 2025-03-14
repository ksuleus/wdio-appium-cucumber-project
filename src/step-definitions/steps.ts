import { When } from '@wdio/cucumber-framework';
import Header from '../elements/header';

When('I open YouTube in browser', async () => {
    await browser.url(`https://www.youtube.com/`);
});

When('YouTube logo is visible', async () => {
    expect(await Header.isLogoVisible()).toBe(true);
 });
