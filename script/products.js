import products_list from "./product_database.js";
import flavor_list from "./flavor_database.js";

const LOCAL_STORAGE_CART_KEY = "icyco_cart";
let cartItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY)) || [];
let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];


document.addEventListener("DOMContentLoaded", () => {
    displayFlavorFilter();
    displayProducts(products_list);
    displayCartItems();
    handleQuantityButtonsInCart();        
});

// display products
function displayProducts(products) {
    let productsSection = document.querySelector(".products-box");
    productsSection ? productsSection.innerHTML = "" : null;

    products.forEach(product => {
        let box = document.createElement("div");
        let flavorName = flavor_list.find(f => f.id == product.flavor_id)?.name;

        box.setAttribute("class", "box");
        box.setAttribute("id", product.id);

        box.innerHTML = `
            <div class="image-wrapper">
                <div class="off">-${product.off}%</div>
                <img src="${product.image}" alt="">
                <div class="cat-label">${flavorName}</div>
            </div>
            <div class="name-price">
                <div class="name">${product.name}</div>
                <div class="price">$${product.price}</div>
            </div>
            <div class="description">${product.description}</div>
            <!-- Row for quantity and wishlist -->
            <div class="qty-wishlist-row">
                <div class="qty">
                    <span class="decrease">-</span>
                    <span class="pcs">1</span>
                    <span class="increase">+</span>
                </div>
                <button class="wishlist-btn">
                    <i class="fa fa-heart ${isItemInWishlist(product.id) ? 'wishlist-active' : ''}"></i>
                </button>
            </div>`;

        // Add "Add to Cart" button
        let addToCartButton = document.createElement("button");
        let existingCartItem = cartItems.find(item => item?.itemId == product.id);
        if (existingCartItem) {
            addToCartButton.textContent = "Already in the cart - Add again?";
        } else {
            addToCartButton.textContent = "Add to Cart";
        }
        addToCartButton.addEventListener("click", (e) => {
            addToCart(e);
        });

        // Append Add to Cart button to the box
        box.appendChild(addToCartButton);

        // Add the box to the products section
        productsSection?.appendChild(box);

        // Add event listener for wishlist functionality
        let wishlistIcon = box.querySelector(".wishlist-btn i");
        wishlistIcon.addEventListener("click", (e) => {
            addToWishlist(e);
            toggleWishlist(product.id);
            wishlistIcon.classList.toggle('wishlist-active'); // Toggle wishlist-active class for visual change
        });
    });

    handleQuantityButtonsInProductCard();
}


// Example helper function to check if item is in the wishlist
function isItemInWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return wishlist.some(item => item === productId);
}

// Function to toggle wishlist status
function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(item => item !== productId); // Remove item from wishlist
    } else {
        wishlist.push(productId); // Add item to wishlist
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
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

// Add items to wishlist

function addToWishlist(e) {
    let wishlistItemId = e.target.closest(".box").getAttribute("id");
    let pcs = parseInt(e.target.closest(".box").querySelector(".pcs").textContent, 10);

    // Ensure pcs is a valid number
    if (isNaN(pcs) || pcs <= 0) {
        showToast("Please select the number of cups you want!");
        return;
    }

    let existingWishlistItem = wishlistItems.find(item => item.itemId == wishlistItemId);
    let item = products_list.find(item => item.id == wishlistItemId);
    let amount = item.price * pcs;

    if (existingWishlistItem) {
        existingWishlistItem.pcs += pcs; // Increment by the correct number of pcs
        existingWishlistItem.amount = existingWishlistItem.pcs * item.price;
        showToast(`${pcs} more ${item.name} ice cream/s successfully added to the wishlist!`);
    } else {
        wishlistItems.push({
            itemId: wishlistItemId,
            pcs: pcs,  // Ensure pcs is a number
            amount: amount
        });
        showToast(`${pcs} ${item.name} ice cream/s successfully added to the wishlist!`);
    }

    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    displayWishlistItems();
}




function handleRemoveButtonInWishlist() {
    let removeBtns = document.querySelectorAll(".remove-wishlist-item-btn");
    removeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            let itemId = btn.closest('li').getAttribute("id");
            wishlistItems = wishlistItems.filter(item => item.itemId !== itemId);

            localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
            displayWishlistItems(); // Update the wishlist display

            // Reset button text to "Add to Wishlist" if necessary
            const productBox = document.querySelector(`.box[id='${itemId}']`);
            if (productBox) {
                const addToWishlistButton = productBox.querySelector(".wishlist-btn");
                addToWishlistButton.innerHTML = '<i class="fa fa-heart"></i>'; // Reset icon and text
            }
        });
    });
}


function displayWishlistItems() {
    const wishlistUlList = document.querySelector(".wishlist-list-items");
    wishlistUlList.innerHTML = "";

    if (wishlistItems.length > 0) {
        document.querySelector(".empty-wishlist").classList.remove("active");
        document.querySelector(".no-empty-wishlist").classList.add("active");
    } else {
        document.querySelector(".empty-wishlist").classList.add("active");
        document.querySelector(".no-empty-wishlist").classList.remove("active");
    }

    wishlistItems.forEach(wi => {
        let itemLi = document.createElement("li");
        itemLi.setAttribute("id", wi.itemId);
        let product = products_list.find(p => p.id == wi.itemId);
    
        if (product) {
            itemLi.innerHTML = `
                <img src="${product.image}" alt="">
                <div class="text">
                    <span class="name">${product.name}</span><br>
                    <span class="qty">${wi.pcs}</span><br>
                    <div class="price">$${wi.amount}</div>
                    <button class="move-to-cart">Move to Cart</button>
                    <i class="fa fa-times remove-wishlist-item-btn" aria-hidden="true"></i>
                </div>
            `;
            wishlistUlList.appendChild(itemLi);
            handleRemoveButtonInWishlist();  // Attach remove functionality
    
            let moveToCartBtn = itemLi.querySelector(".move-to-cart");
            moveToCartBtn.addEventListener("click", () => moveToCart(wi.itemId));
        }
    });
    
}


// Function to move item from wishlist to cart
function moveToCart(wishlistItemId) {
    // Find the item in wishlist
    let wishlistItemIndex = wishlistItems.findIndex(item => item.itemId == wishlistItemId);
    if (wishlistItemIndex > -1) {
        let wishlistItem = wishlistItems[wishlistItemIndex];

        // Check if the item already exists in the cart
        let existingCartItem = cartItems.find(item => item.itemId == wishlistItemId);
        if (existingCartItem) {
            existingCartItem.pcs += wishlistItem.pcs; // Update quantity if it already exists
            existingCartItem.amount = existingCartItem.pcs * products_list.find(p => p.id == wishlistItemId).price; // Update amount
            showToast(`${wishlistItem.pcs} ${products_list.find(p => p.id == wishlistItemId).name} moved to cart!`);
        } else {
            cartItems.push({
                itemId: wishlistItem.itemId,
                pcs: wishlistItem.pcs,
                amount: wishlistItem.amount
            });
            showToast(`${wishlistItem.pcs} ${products_list.find(p => p.id == wishlistItemId).name} added to cart!`);
        }

        // Remove the item from the wishlist
        wishlistItems.splice(wishlistItemIndex, 1);
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));

        // Re-display the wishlist and cart items
        displayWishlistItems();
        displayCartItems();
    }
}


// Scroll animation

document.addEventListener("DOMContentLoaded", () => {
    
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

// Create search bar and search button dynamically
function createSearchBar() {
    const searchBarContainer = document.querySelector(".search-container");

    // Check if the search bar already exists
    if (document.getElementById("search-bar")) return;

    // Create the search bar only if it doesn't already exist
    const searchBar = document.createElement("input");
    searchBar.classList.add("products-searchbar");
    searchBar.setAttribute("type", "text");
    searchBar.setAttribute("id", "search-bar");
    searchBar.setAttribute("placeholder", "Search for flavors...");
    searchBarContainer.appendChild(searchBar);

    // Check if the search button already exists
    if (document.getElementById("search-btn")) return;

    // Create the search button only if it doesn't already exist
    const searchButton = document.createElement("button");
    searchButton.setAttribute("id", "search-btn");
    searchButton.innerText = "Search";
    searchBarContainer.appendChild(searchButton);

    // Attach event listener for the search button
    searchButton.addEventListener("click", () => {
        const query = searchBar.value.toLowerCase();
        const filteredProducts = products_list.filter(product => {
            const flavorName = flavor_list.find(f => f.id === product.flavor_id)?.name.toLowerCase();
            return product.name.toLowerCase().includes(query) || flavorName.includes(query);
        });
        displayProducts(filteredProducts);
    });

    // Handle input event for live search
    handleSearchInput();
}

// Handle input event for search functionality
function handleSearchInput() {
    const searchInput = document.getElementById("search-bar");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products_list.filter(product => {
            const flavorName = flavor_list.find(f => f.id === product.flavor_id)?.name.toLowerCase();
            return product.name.toLowerCase().includes(query) || flavorName.includes(query);
        });
        displayProducts(filteredProducts);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createSearchBar(); // Create the search bar and button on page load
});
