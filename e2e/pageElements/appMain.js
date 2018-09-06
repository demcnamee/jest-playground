import { driver, defaultTimeout } from '../helpers/driver';

const leftSelector = { css: '.left' };
const rightSelector = { css: '.right' };
const requirementSelector = {css: '.left > p'};

export const leftBlock = () => driver.findElement(leftSelector);

export const rightBlock = () => driver.findElement(rightSelector);

export const requirement = () => driver.findElement(requirementSelector);
