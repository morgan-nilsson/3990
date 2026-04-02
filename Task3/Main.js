const toggle = document.getElementById('menu-toggle');
const list = document.getElementById('sweeties-list');
const imgDiv = document.getElementById('sweet-image');
const arrow = toggle.querySelector('.arrow');
let open = false;

toggle.addEventListener('click', () => {
    open = !open;
    list.classList.toggle('open', open);
    arrow.innerHTML = open ? '&#9660;' : '&#9658;';

    if (!open) {
        list.querySelector('.selected')?.classList.remove('selected');
        imgDiv.innerHTML = '';
    }
});

list.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;

    list.querySelector('.selected')?.classList.remove('selected');
    li.classList.add('selected');
    imgDiv.innerHTML = `<img src="images/${li.dataset.sweet}.jpg" alt="${li.dataset.sweet}">`;
});
