import { driver } from '../helpers/driver';
import { load } from '../pageObjects/index';

describe('index', () => {
  it('should show the right title', async () => {
    await load();
    expect(await driver.getTitle()).toBe('ui-automation-bootstrap | Bootstrap for UI automation using Jest');
  });
});
