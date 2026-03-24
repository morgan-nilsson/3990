import { arrTexts, arrColors } from './myArrays.js';
import { generateButtons, displayButtons } from './myFunctions.js';
import { ColorButton } from './myColorButton.js';

let arrButtons = generateButtons(arrTexts, arrColors);
displayButtons(arrButtons);

let colorBtn = new ColorButton('Extra Button', 'purple', 'Extra Button is shown on the purple background', 'white');
setTimeout(() => {
    colorBtn.show();
}, arrButtons.length * 2000);
