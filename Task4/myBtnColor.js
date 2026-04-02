export class btnColor {
    constructor(color) {
        this.color = color;
    }

    show() {
        const btn = document.createElement('button');
        btn.className = 'color-btn';
        btn.textContent = this.color;
        btn.style.backgroundColor = this.color;
        btn.dataset.color = this.color;
        document.getElementById('colors').appendChild(btn);
    }
}
