import products_list from "./product_database.js";
import flavor_list from "./flavor_database.js";

document.addEventListener("DOMContentLoaded", () => {
        displayFlavorFilter()
        displayProducts(products_list)
    }
)

// display products
function displayProducts(products) {
    let productsSection = document.querySelector(".products-box");
    productsSection.innerHTML = ""

    products.forEach(product => {
        let box = document.createElement("div");
        let flavorName = flavor_list.find(f => f.id == product.flavor_id)?.name;
        box.setAttribute("class", "box"); box.setAttribute("id", product.id);
        box.innerHTML = `<div class="image-wrapper">
                        <div class="off">-${product.off}%</div>
                        <img src="${product.image}" alt="">
                        <div class="cat-label">${flavorName}</div>
                    </div>
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

// display flavors filter
function displayFlavorFilter() {

    let flavorFilterSection = document.querySelector(".categories-wrapper");

    let allButton = document.createElement("button");
    allButton.setAttribute("id", "all");
    allButton.setAttribute("class", "active");
    allButton.textContent = "All";
    flavorFilterSection.appendChild(allButton);
    allButton.addEventListener("click", () => {
        flavorFilterSection.querySelector(".active").classList.remove("active")
        allButton.classList.add("active")
        filterProducts("all")
    })

    flavor_list.forEach(flavor => {
        let button = document.createElement("button");
        button.setAttribute("id", flavor.id);
        button.textContent = flavor.name;
        button.addEventListener("click", () => {
            flavorFilterSection.querySelector(".active")?.classList.remove("active")
            button.classList.add("active")
            filterProducts(flavor.id)
        })
        flavorFilterSection.appendChild(button);
    });

}

function filterProducts(id) {

    let productsToDisplay = products_list

    if (id != "all") {
        productsToDisplay = products_list.filter(p => p.flavor_id == id)
    }
    console.log(productsToDisplay)

    displayProducts(productsToDisplay)

}

const increaseBtns = document.querySelectorAll(".increase");
const decreaseBtns = document.querySelectorAll(".decrease");

increaseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.previousElementSibling.textContent = parseInt(btn.previousElementSibling.textContent) + 1;
        console.log("incremented");
    });
});
decreaseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.nextElementSibling.textContent > 0) {
            btn.nextElementSibling.textContent = parseInt(btn.nextElementSibling.textContent) - 1;
        }
        console.log("decremented");
    });
});