import { requirement } from '../pageElements/appMain';
import * as input from '../pageElements/interaction';
import { load } from '../pageElements/index';
import { app } from '../data/text';
import { driver } from '../helpers/driver';
import { results } from '../pageElements/output';

describe('app', () => {
  beforeAll(async () => {
    await load();
    await console.log('loaded');
  });

  beforeEach(async () => {
    await input.sideA().clear();
    await input.sideB().clear();
    await input.sideC().clear();
  });

  it ('should display the correct description text', async () => {
    expect(await requirement().getText()).toContain(`${app.requirementText}`);
  });

  it ('should draw an equilateral triangle', async () => {
    await input.sideA().sendKeys('5');
    await input.sideB().sendKeys('5');
    await input.sideC().sendKeys('5');
    await input.checkButton().submit();
    expect(await results().getAttribute('value')).toEqual('Equilateral');
    expect(await results().getCssValue('color')).toEqual('rgba(0, 0, 139, 1)');
  });

  it ('should draw an isosceles triangle', async () => {
    await input.sideA().sendKeys('5');
    await input.sideB().sendKeys('5');
    await input.sideC().sendKeys('6');
    await input.checkButton().submit();
    expect(await results().getAttribute('value')).toEqual('Isosceles');
    expect(await results().getCssValue('color')).toEqual('rgba(0, 100, 0, 1)');
  });

  it ('should draw a scalene triangle', async () => {
    await input.sideA().sendKeys('3');
    await input.sideB().sendKeys('4');
    await input.sideC().sendKeys('5');
    await input.checkButton().submit();
    expect(await results().getAttribute('value')).toEqual('Scalene');
    expect(await results().getCssValue('color')).toEqual('rgba(255, 255, 0, 1');
  });
});
