import { until } from 'selenium-webdriver';
import { driver, defaultTimeout } from '../helpers/driver';

const rootSelector = { css: 'body' };

export const root = () => driver.findElement(rootSelector);

export const load = async () => {
  await driver.get(`${__baseUrl__}`);
  await driver.wait(until.elementLocated(root), defaultTimeout);
};
