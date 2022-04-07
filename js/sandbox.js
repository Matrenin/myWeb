let divEl = document.querySelector(".products");

// class Products {
//     constructor(id, title, price) {
//         this.id = id;
//         this.title = title;
//         this.price = price;
//     }
//     renderProduct() {
//         return `
//             <div class="product-item">
//                 <h3>${this.title}</h3>
//                 <p>${this.price}</p>
//                 <button class="by-btn">Добавить</button>
//             </div>   
//         `;
//     }
// }

// let products = [
//     new Products (1, "Notebook", 100),
//     new Products (2, "Mouse", 100),
//     new Products (3, "Keyboard", 250),
//     new Products (4, "Camepad", 150),
// ];

// divEl.innerHTML = products.map(el => el.renderProduct());

let products = [
    {id: 1, title: "Notebook", price: 1000},
    {id: 2, title: "Mouse", price: 100},
    {id: 3, title: "Keyboard", price: 250},
    {id: 4, title: "Camepad", price: 150},
];

let renderProduct = (title, price) => {
    return `
        <div class="product-item">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить</button>
        </div>
    `;
};

let productsList = products.map((good) => {
    return renderProduct(good.title, good.price);
});

divEl.innerHTML = productsList;

// let renderProducts = (list) => {
//     let productList = list.map((good) => {
//         return renderProduct(good.title, good.price, good.img);
//     });
//     divEl.innerHTML = productList;
// };

// renderProducts(products);

// 1.
divEl.classList.add("parent-products");
document.querySelectorAll(".product-item").forEach(el => el.classList.add("new-productItem"));
document.querySelectorAll("h3").forEach(el => el.classList.add("product-title"));
document.querySelectorAll("button").forEach(el => el.classList.add("product-btn"));


// 3.
const divNodes = divEl.childNodes;
divNodes.forEach(node => {
    if (node.nodeName == "#text") {
        node.remove();
    }
});
