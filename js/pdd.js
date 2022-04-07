let musicBoxBtnEl = document.querySelector(".music__box-btn");
let musicProductEl = document.querySelector(".music__box-product");

class Product {
    constructor(name, img, year) {
        this.name = name;
        this.img = img;
        this.year = year;
    }

    getProductMarkup() {
        return `
            <div class="product">
               <h4>${this.name}</h4>
               <img src="${this.img}" alt="${this.name}" height="300">
               <p>${this.year} г.</p>
            </div>
        `;
    }
}

let products = {
    bebop: [
        new Product("olympus", "img/away.jpg", 1917),
        new Product("kodak", "img/arch.jpg", 1984),
    ],
    swing: [
        new Product("Сорокин", "img/Piter.jpg", 1878),
    ],
    fusion: [
        new Product("Сталкер", "img/stalkeranons.jpg", 1974),
    ],
};

musicBoxBtnEl.addEventListener("click", event => {
    if (event.target.tagName != "BUTTON") {
        return;
    }
    let productStyle = event.target.dataset.style;
    musicProductEl.innerHTML = products[productStyle].map(el => el.getProductMarkup()).join("");
});