import { leftBlock } from './appMain';

const sideASelector = { css: '#side-a' };
const sideBSelector = { css: '#side-b' };
const sideCSelector = {css: '#side-c'};
const checkButtonSelector = {css: '[type="submit"]'}

export const sideA = () => leftBlock().findElement(sideASelector);

export const sideB = () => leftBlock().findElement(sideBSelector);

export const sideC = () => leftBlock().findElement(sideCSelector);

export const checkButton = () => leftBlock().findElement(checkButtonSelector);
