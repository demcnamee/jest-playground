import { rightBlock } from './appMain';

const resultSelector = { css: '#triangle-type' };

const trianglePathSelector = { css: '#triangle-path'};

export const results = () => rightBlock().findElement(resultSelector);

export const trianglePath = () => rightBlock().findElement(trianglePathSelector);
