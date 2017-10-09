import { driver } from '../helpers/driver';
import { load } from '../pageObjects/index';
import {app} from '../data/text';

describe('index', () => {
  it('should show the correct title', async () => {
    await load();
    expect(await driver.getTitle()).toBe(`${app.header} | ${app.tagline}`);
  });
});
