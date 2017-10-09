import { name, tagline } from '../pageObjects/app';
import { load } from '../pageObjects/index';
import {app} from '../data/text';

describe('app', () => {
  beforeEach(async () => {
    await load();
  });

  it('should show the correct page header content', async () => {
    expect(await name().getText()).toBe(app.header);
  });

  it('should show the correct tagline', async () => {
    expect(await tagline().getText()).toBe(app.tagline);
  });
});
