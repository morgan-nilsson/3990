import { Button } from './myButton.js';

export function generateButtons(arrTexts, arrColors) {
    let arrButtons = [];
    arrTexts.forEach((element, index) => {
        let btnTitle = `${element} is shown on the ${arrColors[index]} background`;
        let btn = new Button(element, arrColors[index], btnTitle);
        arrButtons.push(btn);
    });
    return arrButtons;
}

export function displayButtons(arrButtons) {
    // 30 seconds delay
    // arrButtons.forEach((btn, index) => {
    //     setTimeout(() => {
    //         btn.show();
    //     }, index * 30000);
    // });
    // 2 second delay
    arrButtons.forEach((btn, index) => {
        setTimeout(() => {
            btn.show();
        }, index * 2000);
    });
}
