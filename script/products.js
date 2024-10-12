import products_list from "./product_database.js";
import flavor_list from "./flavor_database.js";

const LOCAL_STORAGE_CART_KEY = "icyco_cart";
let cartItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY)) || [];

document.addEventListener("DOMContentLoaded", () => {
    displayFlavorFilter();
    displayProducts(products_list);
    displayCartItems();
    handleQuantityButtonsInCart();        
});

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
                                <span class="pcs">1</span>
                                <span class="increase">+</span>
                            </div>`;




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
    // handleQuantityButtonsInCart()

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

function showToast(message) {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5500);
}

// Add items to cart
function addToCart(e) {
    let cartItemId = e.target.parentElement.getAttribute("id");

    // Check if the item already exists in the cart
    let existingCartItem = cartItems.find(item => item?.itemId == cartItemId);

    let item = products_list.find(item => item.id == cartItemId);
    let pcs = e.target.parentElement.querySelector(".pcs").textContent;
    let amount = item.price * pcs;

    if (pcs == 0) {
        showToast("Please select the number of cups you want!");
        return;
    }
    if (existingCartItem) {
        // Update the existing item's quantity and amount
        existingCartItem.pcs = (parseInt(existingCartItem.pcs) + parseInt(pcs));
        existingCartItem.amount = existingCartItem.pcs * item.price;
        showToast(`${pcs} more ${item.name} ice cream/s successfully added to the cart!`);
    } else {
        // Add a new item to the cart
        cartItems.push({
            itemId: cartItemId,
            pcs: pcs,
            amount: amount
        });
        showToast(`${pcs} ${item.name} ice cream/s successfully added to the cart!`);
        e.target.textContent = "Already in the cart - Add again?";
    }
    // Save the updated cart to local storage
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));

    // Display updated cart items
    displayCartItems();
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
    if (cartItems.length != 0) {
        document.querySelector(".empty-cart").classList.remove("active");
        document.querySelector(".no-empty-cart").classList.add("active");
    } else {
        document.querySelector(".empty-cart").classList.add("active");
        document.querySelector(".no-empty-cart").classList.remove("active");
    }

    const cartUlList = document.querySelector(".cart-list-items");
    cartUlList.innerHTML = "";

    let subtotal = 0, noOfItems = 0;

    // Iterate over cartItems to create list items
    cartItems.map(ci => {
        let itemLi = document.createElement("li");
        itemLi.setAttribute("id", ci.itemId);

        // Find the product for the current cart item
        let product = products_list.find(p => p.id == ci.itemId); // Move this line here

        // Check if the product was found
        if (product) {
            itemLi.innerHTML = `
                <img src="${product.image}" alt="">
                <div class="text">
                    <span class="name">${product.name}</span><br>
                    <span class="qty">${ci.pcs}</span> x ${product.price} <br>
                    <div class="price">$${ci.amount}</div>
                    <i class="fa fa-times remove-cart-item-btn" aria-hidden="true"></i>
                </div>
                <div class="qty qtycart">
                    <span class="decrease decreasecart">-</span>
                    <span class="pcs pcscart">${ci.pcs}</span>
                    <span class="increase increasecart">+</span>
                </div>
            `;

            cartUlList.appendChild(itemLi);
            handleRemoveButtonInCart();
            // handleQuantityButtonsInCart() // Uncomment if needed
            
            subtotal += Number.parseFloat(ci.amount);
            noOfItems += Number.parseInt(ci.pcs);
        } else {
            console.error(`Product with ID ${ci.itemId} not found`);
        }
    });

    // Update subtotal and number of items in the cart
    document.querySelector(".sub-total").textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector(".no-of-cart-items").textContent = noOfItems;
}

function handleQuantityButtonsInProductCard() {
    const productsBox = document.querySelector(".products-box");
    if (!productsBox) return;
    productsBox.addEventListener("click", (e) => {
        
        if (e.target.classList.contains("increase")) {
            const qtySpan = e.target.previousElementSibling;
            let currentQty = parseInt(qtySpan.textContent);
            qtySpan.textContent = currentQty + 1; 
        }
        if (e.target.classList.contains("decrease")) {
            const qtySpan = e.target.nextElementSibling; 
            let currentQty = parseInt(qtySpan.textContent);
            if (currentQty > 1) { 
                qtySpan.textContent = currentQty - 1; 
            }
        }
    });
}


function handleQuantityButtonsInCart() {
    const cartList = document.querySelector(".cart-list-items");
    function updateSubtotal() {
        const subtotalElement = document.querySelector(".sub-total");
        const subtotal = cartItems.reduce((acc, item) => acc + item.amount, 0);
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }

    cartList.addEventListener("click", (e) => {
        const itemId = e.target.closest("li").getAttribute("id");
        let cartItem = cartItems.find(item => item.itemId == itemId);

        if (e.target.classList.contains("increase")) {
            const qtySpan = e.target.previousElementSibling;
            let currentQty = parseInt(qtySpan.textContent);
            qtySpan.textContent = currentQty + 1;
            cartItem.pcs = currentQty + 1;
            cartItem.amount = cartItem.pcs * products_list.find(p => p.id == itemId).price;

            const priceElement = e.target.closest("li").querySelector(".price");
            priceElement.textContent = `$${cartItem.amount.toFixed(2)}`;

            const textQtyElement = e.target.closest("li").querySelector(".text .qty");
            textQtyElement.textContent = cartItem.pcs;

            localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));

            updateSubtotal(); 
        }

        if (e.target.classList.contains("decrease")) {
            const qtySpan = e.target.nextElementSibling;
            let currentQty = parseInt(qtySpan.textContent);
            if (currentQty > 1) {
                qtySpan.textContent = currentQty - 1;
                cartItem.pcs = currentQty - 1;
                cartItem.amount = cartItem.pcs * products_list.find(p => p.id == itemId).price;

                const priceElement = e.target.closest("li").querySelector(".price");
                priceElement.textContent = `$${cartItem.amount.toFixed(2)}`;

                const textQtyElement = e.target.closest("li").querySelector(".text .qty");
                textQtyElement.textContent = cartItem.pcs;

                localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));

                updateSubtotal(); 
            }
        }
    });
}

// Scroll animation

document.addEventListener("DOMContentLoaded", () => {
    
    const sr = ScrollReveal();

    // Apply ScrollReveal to products
    const productBoxes = document.querySelectorAll(".products-box .box");
    productBoxes.forEach(box => {
        sr.reveal(box, {
            origin: 'left',
            distance: '80px',
            duration: 600,
            easing: 'ease-in',
            interval: 400,
            reset:true
        });
    });

});