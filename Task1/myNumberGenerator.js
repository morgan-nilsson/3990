export class NumberGenerator {
    constructor(id) {
        this.el = document.getElementById(id);
        this.value = 0;
        this.onChange = null;

        this.el.innerHTML = `
            <button id="less">\u2B07</button>
            <span class="num">0</span>
            <button id="more">\u2B06</button>
            <br>
            <button id="makeNum">Make your number now!</button>
        `;

        this.display = this.el.querySelector('.num');

        this.el.addEventListener('click', (e) => {
            if (e.target.id === 'makeNum') {
                this.value = Math.floor(Math.random() * 101);
            } else if (e.target.id === 'more') {
                this.value++;
            } else if (e.target.id === 'less' && this.value > 0) {
                this.value--;
            } else {
                return;
            }

            this.display.textContent = this.value;

            if (this.onChange) {
                this.onChange(this.value);
            }
        });
    }
}
