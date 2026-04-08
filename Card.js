class Card {
    /**
     * @param {string} question
     * @param {string[]} options
     * @param {string} correctAnswer
     */
    constructor(question, options, correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.done = false;
        this.block = null;
        this.checkBtn = null;
    }

    /** @returns {HTMLDivElement} */
    render() {
        this.block = document.createElement("div");
        this.block.classList.add("card-front-content");

        const qText = document.createElement("p");
        qText.classList.add("card-question");
        qText.textContent = this.question;
        this.block.appendChild(qText);

        const form = document.createElement("form");
        form.classList.add("card-options");

        this.options.forEach((option) => {
            const label = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer";
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(" " + option));
            form.appendChild(label);
        });

        this.block.appendChild(form);

        this.checkBtn = document.createElement("button");
        this.checkBtn.type = "button";
        this.checkBtn.textContent = "Check";
        this.checkBtn.classList.add("check-btn");
        this.block.appendChild(this.checkBtn);

        this.checkBtn.onclick = (e) => {
            e.stopPropagation();
            if (this.done) return;

            const selected = form.querySelector("input[name='answer']:checked");
            if (!selected) return;

            this.done = true;

            const tile = this.block.closest(".tile");
            if (tile) {
                tile.dataset.done = "true";
                tile.classList.add("tile-done");
            }

            if (selected.value === this.correctAnswer) {
                updateScore(1);
                showMessage("Good job!", "success");
            } else {
                showMessage("Wrong answer!", "error");
            }
        };

        return this.block;
    }

    /** @param {HTMLElement} container */
    show(container) {
        if (!this.block) {
            this.render();
        }
        container.appendChild(this.block);
    }
}
