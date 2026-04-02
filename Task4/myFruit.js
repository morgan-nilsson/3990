export class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    show() {
        const li = document.createElement('li');
        li.textContent = this.name;
        li.style.backgroundColor = this.color;
        li.dataset.color = this.color;
        document.querySelector('#fruits ul').appendChild(li);
        return li;
    }
}

export class RatedFruit extends Fruit {
    constructor(name, color, rating) {
        super(name, color);
        this.rating = rating;
    }

    show() {
        const li = super.show();
        const div = document.createElement('div');
        div.className = 'star-rating';

        let stars = '';
        for (let i = 1; i <= 5; i++) {
            const cls = i <= this.rating ? 'on' : 'off';
            stars += `<span class="star ${cls}" data-index="${i}">\u2605</span>`;
        }

        div.innerHTML = 'Star Rating: ' + stars;
        li.appendChild(div);
    }
}
