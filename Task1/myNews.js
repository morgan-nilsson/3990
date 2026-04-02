const lorem = "Lorem Ipsum blah blah yap yap yap hello world x.";

export function generateNews(id, count) {
    const el = document.getElementById(id);
    el.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        const div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = `
            <h3>Title #${i}</h3>
            <p>${lorem}</p>
            <button onclick="this.parentElement.remove()">Remove \u{1F5D1}</button>
        `;
        el.appendChild(div);
    }
}
