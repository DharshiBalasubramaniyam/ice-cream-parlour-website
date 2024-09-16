import products_list from "/script/product_database.js";
console.log(products_list);

function addProductsToMenu() {
    let productsSection = document.querySelector(".products-box");

    products_list.forEach(product => {
        let box = document.createElement("div");
        box.setAttribute("class", "box"); box.setAttribute("id", product.id);
        box.innerHTML = `<div class="off">-${product.off}%</div>
                            <i class="fa fa-heart wish" aria-hidden="true"></i>
                            <img src="${product.image}" alt="">
                            <div class="name-price">
                                <div class="name">${product.name}</div>
                                <div class="price">$${product.price}</div>
                            </div>
                            <div class="description">${product.description}</div>
                            <div class="qty">
                                <span class="decrease">-</span>
                                <span class="pcs">0</span>
                                <span class="increase">+</span>
                            </div>
                            <button class="add-to-cart-btn">Add to Cart</button>`;

        productsSection.appendChild(box);
    });
}
addProductsToMenu();

const increaseBtns = document.querySelectorAll(".increase");
const decreaseBtns = document.querySelectorAll(".decrease");
console.log(increaseBtns);

increaseBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        btn.previousElementSibling.textContent = parseInt(btn.previousElementSibling.textContent) + 1;
        console.log("incremented");
    });
});
decreaseBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(btn.nextElementSibling.textContent>0) {
            btn.nextElementSibling.textContent = parseInt(btn.nextElementSibling.textContent) - 1;
        }
        console.log("decremented");
    });
});