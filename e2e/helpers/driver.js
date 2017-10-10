import { Builder } from 'selenium-webdriver';
import {Options as chromeOptions} from 'selenium-webdriver/chrome';

export const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(new chromeOptions()
    .addArguments('start-maximized')
    .setChromeBinaryPath('C:\\Users\\dmcnamee\\AppData\\Local\\Google\\Chrome SxS\\Application\\chrome.exe')
  )
  .usingServer('http://localhost:4444/wd/hub')
  .build();

afterAll(async () => {
  // Cleanup `process.on('exit')` event handlers to prevent a memory leak caused by the combination of `jest` & `tmp`.
  for (const listener of process.listeners('exit')) {
    listener();
    process.removeListener('exit', listener);
  }
  await driver.quit();
});

export const defaultTimeout = 10e3;
