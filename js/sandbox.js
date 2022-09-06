const api = "https://raw.githubusercontent.com/Matrenin/Test/main/response";

class List {
    constructor(container = ".products") {
        this.container = document.querySelector(container);
        this.goods = [];
        this.products = [];
        this.catalogUrl = "/catalog.json";

        this.getJson(`${api + this.catalogUrl}`)
            .then(data => {
                this.goods = data;
                this.render();
            });
    }

    getJson(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    render() {
        for (let good of this.goods) {
            let prod = new Item(good);
            this.products.push(prod);
            this.container.insertAdjacentHTML("beforeend", prod.getMarkup());
            prod.showModal(good.id);
        }
    }
}

class Item {
    constructor(elem) {
        this.id = elem.id;
        this.title = elem.title;
        this.price = elem.price;
    }

    getMarkup() {
        return `
            <div>
                <div class="product-item" data-id="${this.id}">
                    <p>${this.title}</p>
                    <p>${this.price}</p>
                </div>

                <div class="modal">
                    <div class="modal__desc" data-id="${this.id}">
                        <p>${this.title}</p>
                        <p>${this.price}</p>
                    </div>
                </div>
            </div>
        `;
    }

    showModal(id) {
        let modals = document.querySelectorAll(".modal");
        document.querySelector(".products").addEventListener("click", event => {
            if (event.target.closest(`.product-item[data-id="${id}"]`)) {
                let itemId = event.target.dataset.id;
                for (let modal of modals) {
                    if (modal.dataset.id === itemId) {
                        modal.style.display = "flex";
                    }
                }
            }
        });
    }
}

let list = new List();