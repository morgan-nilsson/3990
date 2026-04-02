import { ColorButton, PaletteMenu } from './myColorButton.js';

const colors = [
    'black', 'navy', 'darkred', 'red', 'orange',
    'yellow', 'green', 'lime', 'cyan', 'blue',
    'magenta', 'purple', 'white', 'brown', 'teal'
];

const container = document.getElementById('palette-container');

colors.forEach((c) => {
    new ColorButton(c).render(container);
});

new PaletteMenu('palette-container', 'text-block');
