export class ColorButton {
    constructor(color) {
        this.color = color;
    }

    render(container) {
        const cell = document.createElement('div');
        cell.className = 'color-cell';
        cell.style.backgroundColor = this.color;
        cell.dataset.color = this.color;
        container.appendChild(cell);
    }
}

export class PaletteMenu {
    constructor(containerId, targetId) {
        this.target = document.getElementById(targetId);
        const el = document.getElementById(containerId);
        el.addEventListener('click', this);
        el.addEventListener('mouseover', this);
    }

    handleEvent(e) {
        const cell = e.target.closest('.color-cell');
        if (!cell) return;

        if (e.type === 'click') {
            this.target.style.color = cell.dataset.color;
        } else {
            this.target.style.backgroundColor = cell.dataset.color;
        }
    }
}
