import { NumberGenerator } from './myNumberGenerator.js';
import { generateNews } from './myNews.js';

const numGen = new NumberGenerator('gen');

numGen.onChange = (value) => {
    generateNews('news', value);
};
