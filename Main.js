/** @type {number} */
let score = 0;
/** @type {boolean} */
let gameOver = false;

/** @param {number} change */
function updateScore(change) {
    score += change;
    renderStars();
}

/** @returns {void} */
function renderStars() {
    const starArea = document.getElementById("star-area");
    starArea.innerHTML = "";
    if (score < 0) {
        starArea.innerHTML = '<span class="negative-score">' + score + ' Star</span>';
    } else {
        for (let i = 0; i < score; i++) {
            const star = document.createElement("span");
            star.classList.add("star-icon");
            star.innerHTML = "&#9733;";
            starArea.appendChild(star);
        }
    }
}

/**
 * @param {string} text
 * @param {"success"|"error"|"info"} type
 */
function showMessage(text, type) {
    const msgEl = document.getElementById("message");
    msgEl.textContent = text;
    msgEl.className = "message " + type;
    $(msgEl).fadeIn(400);
    setTimeout(() => {
        $(msgEl).fadeOut(400);
    }, 2000);
}

/** @returns {void} */
function startGame() {
    score = 0;
    gameOver = false;
    renderStars();
    stopTimer();

    const allCards = arrShuffle([...questions, ...assets]);
    const board = document.getElementById("board");
    const scoreSection = document.getElementById("score-section");
    const timerDisplay = document.getElementById("timer-display");
    const msgEl = document.getElementById("message");

    board.innerHTML = "";
    msgEl.textContent = "";
    $(msgEl).hide();

    $(scoreSection).fadeIn(400);

    allCards.forEach((item, index) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.dataset.done = "false";
        tile.dataset.index = index;

        const tileInner = document.createElement("div");
        tileInner.classList.add("tile-inner");

        const tileBack = document.createElement("div");
        tileBack.classList.add("tile-back");

        const tileFront = document.createElement("div");
        tileFront.classList.add("tile-front");

        if (item.question) {
            tile.dataset.type = "quiz";
            const card = new Card(item.question, item.options, item.correctAnswer);
            card.show(tileFront);
        } else {
            tile.dataset.type = "asset";
            tile.dataset.asset = item.value;
            tileFront.innerHTML =
                '<div class="asset-content">' +
                    getAssetIcon(item.value) +
                    '<p class="asset-description">' + item.description + '</p>' +
                '</div>';
        }

        tileInner.appendChild(tileBack);
        tileInner.appendChild(tileFront);
        tile.appendChild(tileInner);
        board.appendChild(tile);

        tile.addEventListener("click", function () {
            if (gameOver) return;

            if (this.dataset.done === "true") {
                showMessage("card is DONE!", "info");
                return;
            }

            if (this.classList.contains("flipped")) return;

            this.classList.add("flipped");

            if (this.dataset.type === "asset") {
                this.dataset.done = "true";
                this.classList.add("tile-done");
                handleAsset(this.dataset.asset);
            }
        });
    });

    $(board).fadeIn(400);

    const duration = allCards.length * 2;
    timer(
        duration,
        (secs) => {
            timerDisplay.textContent = secs + " secs.";
        },
        () => {
            endGame();
        }
    );
}

/** @param {string} assetValue */
function handleAsset(assetValue) {
    switch (assetValue) {
        case "💎":
            updateScore(1);
            showMessage("+1 Star", "success");
            break;
        case "🐻":
            updateScore(-1);
            showMessage("-1 Star", "error");
            if (score < 0) {
                $("#star-area").html('<span class="debt-text">You just started & already with debts!</span>');
            }
            break;
        case "❌":
            gameOver = true;
            showMessage("You can do nothing! Just watching your timer!", "error");
            break;
    }
}

/** @returns {void} */
function endGame() {
    gameOver = true;
    stopTimer();
    const board = document.getElementById("board");
    $(board).fadeOut(400, function () {
        board.innerHTML = "";
    });
    showMessage("Game OVER!", "error");
}

$(document).ready(function () {
    $("#score-section").hide();
    $("#board").hide();
    $("#message").hide();

    $("#start-btn").on("click", function () {
        startGame();
    });
});
