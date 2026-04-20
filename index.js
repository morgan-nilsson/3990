const shopData = [
    {
        group: "Coffee Beans",
        name: "Colombian Supremo Coffee",
        price: 9.99,
        image: "images/img1.jpg",
        description: "Some coffee"
    },
    {
        group: "Coffee Beans",
        name: "coffee beans 2",
        price: 100.00,
        image: "images/img2.jpg",
        description: "Some more coffee beans"
    },
    {
        group: "Coffee and Tea",
        name: "milk frother",
        price: 12.57,
        image: "images/img1.jpg",
        description: "Milk froth"
    },
    {
        group: "Coffee maker",
        name: "Coffee Maker",
        price: 100.21,
        image: "images/img2.jpg",
        description: "Makes coffee",
    }
];

class GroupElement {
    constructor(groupName) {
        this.group = groupName;
    }

    display() {
        // ul
        const ul = $("#groups")[0];

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(this.group));
        li.classList.add("groupElement");
        ul.appendChild(li);
    }
}

// generate categories
const categories = new Set();
(() => {
    shopData.forEach((el) => {
        categories.add(el.group)
    });
    categories.forEach((el) => {
        const ge = new GroupElement(el);
        ge.display()
    })
})();

class Item {
    /**
     * 
     * @param {string} group 
     * @param {string} name 
     * @param {number} price 
     * @param {string | null} image 
     * @param {string} description 
     */
    constructor(group, name, price, image, description) {
        this.group = group;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
    render() {
        const element = document.createElement("div");

        element.classList.add("shopItem")

        const name = document.createElement("h2");
        name.appendChild(document.createTextNode(this.name));
        element.appendChild(name);

        if (this.image) {
            const image = document.createElement("img");
            image.src = this.image;
            element.appendChild(image);
        }

        const price = document.createElement("p");
        price.appendChild(document.createTextNode(`$${this.price}`));
        element.appendChild(price);

        return element;
    }
}

// build items array
const items = (() => {
    const items = [];
    shopData.forEach((el) => {
        items.push(new Item(el.group, el.name, el.price, el.image, el.description));
    })
    return items;
})();

const itemGalleryArticle = $("#itemGallery")[0];
// render the items
(() => {
    items.forEach((item) => {
        itemGalleryArticle.appendChild(item.render())
    })
})();

// on hover of category add red shadow to the items in the category
$("#groups").on('mouseenter', "li", (e) => {

    e.currentTarget.style.backgroundColor = "red";

    const groupName = e.currentTarget.textContent;
    const itemsInGroup = items.filter((item) => item.group === groupName);
    itemsInGroup.forEach((item) => {
        const itemElement = $(".shopItem").filter((index, el) => el.querySelector("h2").textContent === item.name);
        itemElement.addClass("shopItemHover");
    })
})
$("#groups").on('mouseout', "li", (e) => {
    e.currentTarget.style.backgroundColor = "brown";

    $(".shopItem").removeClass("shopItemHover");
})


// on click of item show its description in the itemDescription article
$("#itemGallery").on('click', 'div', (e) => {
    const itemName = e.currentTarget.querySelector("h2").textContent;
    const item = items.find((item) => item.name === itemName);
    const itemDescriptionArticle = $("#itemDescription")[0];
    itemDescriptionArticle.innerHTML = "";
    const description = document.createElement("p");
    description.appendChild(document.createTextNode(item.description));
    itemDescriptionArticle.appendChild(description);
})