import { name, tagline } from '../pageObjects/app';
import { load } from '../pageObjects/index';

describe('app', () => {
  beforeEach(async () => {
    await load();
  });

  it('should show the correct page header content', async () => {
    expect(await name().getText()).toBe('ui-automation-bootstrap');
  });

  it('should show the correct tagline', async () => {
    expect(await tagline().getText()).toBe('Bootstrap for UI automation using Jest');
  });
});
