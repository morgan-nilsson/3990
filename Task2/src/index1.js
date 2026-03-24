let newsInstances = [];

class News {
    constructor(srcImg, newsTitle, newsContent) {
        this.srcImg = srcImg;
        this.newsTitle = newsTitle;
        this.newsContent = newsContent;
        this.likes = 0;
        this.id = newsInstances.length;
        newsInstances.push(this);
        this.container = null;
    }

    render() {
        let div = document.createElement('div');
        div.className = 'news-block';
        div.id = `news-${this.id}`;
        div.innerHTML = `
            <h2 id="title-${this.id}">${this.newsTitle}</h2>
            <span class="likes-display" id="likes-${this.id}"></span>
            <img id="img-${this.id}" src="${this.srcImg}" alt="${this.newsTitle}">
            <p id="text-${this.id}">${this.newsContent}</p>
            <span>Likes: <span id="likeCount-${this.id}">${this.likes}</span></span><br>
            <button class="like-btn" id="likeBtn-${this.id}" onclick="newsInstances[${this.id}].incLikes()">LIKE</button>
            <button class="hide-btn" onclick="newsInstances[${this.id}].hide()">HIDE</button>
        `;
        this.container = div;
        return div;
    }

    show(block) {
        let content = this.render();
        block.appendChild(content);
    }

    incLikes() {
        this.likes++;
        document.getElementById(`likeCount-${this.id}`).textContent = this.likes;
        // Display stars
        let stars = '';
        for (let i = 0; i < this.likes; i++) {
            // the assignment states 9824 is a star, its not
            // stars += '&#9824; ';
            stars += '&#9734;';
        }
        document.getElementById(`likes-${this.id}`).innerHTML = stars;
    }

    hide() {
        let img = document.getElementById(`img-${this.id}`);
        let title = document.getElementById(`title-${this.id}`);
        let text = document.getElementById(`text-${this.id}`);
        let likeBtn = document.getElementById(`likeBtn-${this.id}`);

        img.style.opacity = '0.3';
        title.style.color = 'darkgray';
        title.style.backgroundColor = 'lightgray';
        text.style.color = 'darkgray';
        text.style.backgroundColor = 'lightgray';
        likeBtn.disabled = true;
    }
}

let arrRecourses = [
    {
        srcImg: 'Images/1.jpg',
        newsTitle: 'Breaking News',
        newsContent: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
    {
        srcImg: 'Images/2.jpg',
        newsTitle: 'Technology Update',
        newsContent: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.'
    },
    {
        srcImg: 'Images/3.jpg',
        newsTitle: 'Science Discovery',
        newsContent: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here, making it look like readable English.'
    }
];

function generatenews() {
    let paragraphs = document.querySelectorAll('#content p');
    paragraphs.forEach((paragraph, index) => {
        if (index < arrRecourses.length) {
            let data = arrRecourses[index];
            let newsItem = new News(data.srcImg, data.newsTitle, data.newsContent);
            newsItem.show(paragraph);
        }
    });
}

generatenews();
