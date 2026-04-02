import { Fruit, RatedFruit } from './myFruit.js';
import { btnColor } from './myBtnColor.js';

let fruits = [
    { fruit: "apple", color: "red" },
    { fruit: "pear", color: "green" },
    { fruit: "mango", color: "red" },
    { fruit: "plum", color: "blue" }
];

fruits.forEach((item, i) => {
    if (i === 0) {
        new RatedFruit(item.fruit, item.color, 4).show();
    } else {
        new Fruit(item.fruit, item.color).show();
    }
});

let uniqueColors = [...new Set(fruits.map((f) => f.color))];
uniqueColors.forEach((c) => {
    new btnColor(c).show();
});

$('#colors').on('click', '.color-btn', function () {
    const c = $(this).data('color');
    $('#fruits li').css('box-shadow', 'none');
    $(`#fruits li[data-color="${c}"]`).css(
        'box-shadow',
        '5px 5px 0 3px lightblue'
    );
});

$('#fruits').on('click', '.star', function () {
    const idx = $(this).data('index');
    $(this).parent().find('.star').each(function () {
        const starIdx = $(this).data('index');
        $(this).toggleClass('on', starIdx <= idx);
        $(this).toggleClass('off', starIdx > idx);
    });
});
