/**
 * @param {Array} arr
 * @returns {Array}
 */
function arrShuffle(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/** @type {number|null} */
let timerInterval = null;

/**
 * @param {number} seconds
 * @param {(remaining: number) => void} onTick
 * @param {() => void} onEnd
 */
function timer(seconds, onTick, onEnd) {
    let remaining = seconds;
    onTick(remaining);

    timerInterval = setInterval(() => {
        remaining--;
        onTick(remaining);
        if (remaining <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            onEnd();
        }
    }, 1000);
}

/** @returns {void} */
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

/**
 * @param {string} value
 * @returns {string}
 */
function getAssetIcon(value) {
    switch (value) {
        case "💎":
            return '<i class="fa fa-diamond" style="font-size:48px;color:#6ec6ff;"></i>';
        case "🐻":
            return '<i class="fa fa-paw" style="font-size:48px;color:#b71c1c;"></i>';
        case "❌":
            return '<i class="fa fa-times" style="font-size:48px;color:#b71c1c;"></i>';
        default:
            return '';
    }
}
