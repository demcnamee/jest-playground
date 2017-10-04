import { name, tagline } from '../pageObjects/app';
import { load } from '../pageObjects/index';

describe('app', () => {
  beforeEach(async () => {
    await load();
  });

  it('should show the right page header content', async () => {
    expect(await projectName().getText()).toBe(
      'ui-automation-bootstrap'
    );
  });

  it('should show the right tagline', async () => {
    expect(await tagline().getText()).toBe('Bootstrap a project with UI automation using Jest');
  });
});
