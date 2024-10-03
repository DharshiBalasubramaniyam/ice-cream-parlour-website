import products_list from "./product_database.js";
import flavor_list from "./flavor_database.js";

const LOCAL_STORAGE_CART_KEY = "icyco_cart";
let cartItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY)) || [];

document.addEventListener("DOMContentLoaded", () => {
    displayFlavorFilter()
    displayProducts(products_list)
    displayCartItems()
}
)

// display products
function displayProducts(products) {
    let productsSection = document.querySelector(".products-box");
    productsSection ? productsSection.innerHTML = "" : null

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
                            `;




        let addToCartButton = document.createElement("button");
        // if website got reloded and item already exist in cart
        let existingCartItem = cartItems.find(item => item?.itemId == product.id);
        if(existingCartItem){
            addToCartButton.textContent = "Already in the cart - Add again?";
        }
        else{
        addToCartButton.textContent = "Add to Cart";
        }
        addToCartButton.addEventListener("click", (e) => {
            addToCart(e)
        })

        box.appendChild(addToCartButton)

        productsSection?.appendChild(box);
    });
    handleQuantityButtonsInProductCard()

}

// display flavors filter
function displayFlavorFilter() {

    let flavorFilterSection = document.querySelector(".categories-wrapper");

    let allButton = document.createElement("button");
    allButton.setAttribute("id", "all");
    allButton.setAttribute("class", "active");
    allButton.textContent = "All";
    flavorFilterSection?.appendChild(allButton);
    allButton.addEventListener("click", () => {
        flavorFilterSection?.querySelector(".active").classList.remove("active")
        allButton.classList.add("active")
        filterProducts("all")
    })

    flavor_list.forEach(flavor => {
        let button = document.createElement("button");
        button.setAttribute("id", flavor.id);
        button.textContent = flavor.name;
        button.addEventListener("click", () => {
            flavorFilterSection?.querySelector(".active")?.classList.remove("active")
            button.classList.add("active")
            filterProducts(flavor.id)
        })
        flavorFilterSection?.appendChild(button);
    });

}

function filterProducts(id) {

    let productsToDisplay = products_list

    if (id != "all") {
        productsToDisplay = products_list.filter(p => p.flavor_id == id)
    }

    displayProducts(productsToDisplay)

}

// Add items to cart
function addToCart(e) {

    // document.querySelector(".empty-cart").classList.remove("active")
    // document.querySelector(".no-empty-cart").classList.add("active")
    
    let cartItemId = e.target.parentElement.getAttribute("id");
    // To check if item already exists.
    let existingCartItem = cartItems.find(item => item?.itemId == cartItemId);

    let item = products_list.find(item => item.id == cartItemId);
    let pcs = e.target.parentElement.querySelector(".pcs").textContent;
    let amount = item.price * pcs;

    if (pcs == 0) {
        alert("Please select number of cups you want!");
        return;
    }
    if (existingCartItem) {
        // Update the existing item's quantity and amount
        existingCartItem.pcs = (parseInt(existingCartItem.pcs) + parseInt(pcs));
        existingCartItem.amount = existingCartItem.pcs * item.price;
        alert(`${pcs} more ${item.name} ice cream/s successfully added to the cart!`);
    }
    else{

        cartItems.push({
            itemId: cartItemId,
            pcs: pcs,
            amount: amount
        });
        alert(`${pcs} ${item.name} ice cream/s successfully added to the cart!`);
        e.target.textContent = "Already in the cart - Add again?";
    }
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems))
    

    displayCartItems()

}

function handleRemoveButtonInCart() {
    let removeBtns = document.querySelectorAll(".remove-cart-item-btn");
    removeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            cartItems = cartItems.filter(item => item?.itemId != btn.parentElement.parentElement.getAttribute("id"))
            const productBox = document.querySelector(`.box[id='${btn.parentElement.parentElement.getAttribute("id")}']`);
            if (productBox) {
                // Change the button text to "Add to Cart"
                const addToCartButton = productBox.querySelector("button");
                addToCartButton.textContent = "Add to Cart";
            }
            localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems))
            displayCartItems()
            // if (cartItems.length == 0) {
            //     document.querySelector(".empty-cart").classList.add("active")
            //     document.querySelector(".no-empty-cart").classList.remove("active")
            // }
        })
    });

}

function displayCartItems() {

    if (cartItems.length !=0 ) {
        document.querySelector(".empty-cart").classList.remove("active")
        document.querySelector(".no-empty-cart").classList.add("active")
    }else {
        document.querySelector(".empty-cart").classList.add("active")
        document.querySelector(".no-empty-cart").classList.remove("active")
    }

    const cartUlList = document.querySelector(".cart-list-items");
    cartUlList.innerHTML = "";

    let subtotal = 0, noOfItems = 0;
    cartItems.map(ci => {
        let itemLi = document.createElement("li");

        itemLi.setAttribute("id", ci.itemId);

        let product = products_list.find(p => p.id == ci.itemId)

        itemLi.innerHTML = `<img src="${product.image}" alt="">
                            <div class="text">
                                <span class="name">${product.name}</span><br>
                                <span class="qty">${ci.pcs}</span> x ${product.price} <br>
                                <div class="price">$${ci.amount}</div>
                                <i class="fa fa-times remove-cart-item-btn" aria-hidden="true"></i>
                            </div>`;

        cartUlList.appendChild(itemLi);
        handleRemoveButtonInCart()
        subtotal += Number.parseFloat(ci.amount);
        noOfItems += Number.parseInt(ci.pcs)
    })

    document.querySelector(".sub-total").textContent = `$${subtotal}`;
    document.querySelector(".no-of-cart-items").textContent = noOfItems;

}

function handleQuantityButtonsInProductCard() {
    const increaseBtns = document.querySelectorAll(".increase");
    const decreaseBtns = document.querySelectorAll(".decrease");

    increaseBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.previousElementSibling.textContent = parseInt(btn.previousElementSibling.textContent) + 1;
        });
    });
    decreaseBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.nextElementSibling.textContent > 0) {
                btn.nextElementSibling.textContent = parseInt(btn.nextElementSibling.textContent) - 1;
            }
        });
    });
}
