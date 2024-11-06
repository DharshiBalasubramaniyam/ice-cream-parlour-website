import products_list from "./product_database.js";
import flavor_list from "./flavor_database.js";

const LOCAL_STORAGE_CART_KEY = "icyco_cart";
let cartItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY)) || [];

document.addEventListener("DOMContentLoaded", () => {
      displayFlavorFilter();
      displayCartItems();
      handleQuantityButtonsInCart();
      createSearchBar();

      const falvor_id = getQueryParam("flavor");

      if (falvor_id) {
            filterProducts(falvor_id);
      } else {
            displayProducts(products_list);
      }

      // Scroll animation
      const productBoxes = document.querySelectorAll(".products-box .box");
      productBoxes.forEach((box) => {
            sr.reveal(box, {
                  origin: "left",
                  distance: "80px",
                  duration: 600,
                  easing: "ease-in",
                  interval: 400,
                  reset: true,
            });
      });
});

function displayProducts(products) {
      let productsSection = document.querySelector(".products-box");
      if (productsSection) {
            productsSection.innerHTML = "";
      }

      if (products == '') {
            productsSection.innerHTML = `
              <div class="no-product-container">
                  <h1 class="no-product-heading">No Product Found</h1>
                  <img src="images/product-not-found.png" alt="No products available" class="no-product-image">
                  <p class="no-product-text">We're sorry, but it seems we can't find the product you're looking for. Try searching for another flavor!</p>
              </div>
          `;
      }

      products.forEach((product) => {
            let box = document.createElement("div");
            let flavorName = flavor_list.find((f) => f.id === product.flavor_id)?.name;

            box.setAttribute("class", "box");
            box.setAttribute("id", product.id);

            box.innerHTML = `
              <div class="image-wrapper">
                  <div class="off">-${product.off}%</div>
                  <img src="${product.image}" alt="">
                  <div class="cat-label">${flavorName}</div>
                  <div class="quick-view-icon">
                      <i class="fas fa-eye"></i>
                  </div>
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
            let existingCartItem = cartItems.find((item) => item?.itemId == product.id);
            addToCartButton.textContent = existingCartItem
                  ? "Already in the cart - Add again?"
                  : "Add to Cart";

            addToCartButton.addEventListener("click", (e) => {
                  addToCart(e);
            });

            box.appendChild(addToCartButton);

            // Add click event for the quick view icon

            box.querySelector(".quick-view-icon").addEventListener("click", () => {
                  showQuickView(product);
            });

            productsSection?.appendChild(box);
      });

      handleQuantityButtonsInProductCard();
}
function displayFlavorFilter() {
      let flavorFilterSection = document.querySelector(".categories-wrapper");

      // Create the "All" button
      let allButton = document.createElement("button");
      allButton.setAttribute("id", "all");
      allButton.setAttribute("class", "active");
      allButton.textContent = "All";
      flavorFilterSection?.appendChild(allButton);

      allButton.addEventListener("click", () => {
            flavorFilterSection?.querySelector(".active")?.classList.remove("active");
            allButton.classList.add("active");
            filterProducts("all");

      });

      // Create buttons for each flavor
      flavor_list.forEach((flavor) => {
            let button = document.createElement("button");
            button.setAttribute("id", flavor.id);
            button.textContent = flavor.name;

            button.addEventListener("click", () => {
                  flavorFilterSection?.querySelector(".active")?.classList.remove("active");
                  button.classList.add("active");
                  filterProducts(flavor.id);
            });

            flavorFilterSection?.appendChild(button);
      });

      // Automatically activate the flavor from URL if it exists
      const flavorFromURL = getQueryParam("flavor");
      if (flavorFromURL) {
            let flavorButton = flavorFilterSection.querySelector(
                  `button[id='${flavorFromURL}']`
            );
            if (flavorButton) {
                  flavorFilterSection.querySelector(".active")?.classList.remove("active");
                  flavorButton.classList.add("active");
                  filterProducts(flavorFromURL); // Call filterProducts with the ID from URL
            }
      }
}

function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
}

function filterProducts(id) {
      console.log("Filtering by flavor_id:", id); // Add this line to track filtering
      let productsToDisplay = products_list;

      if (id !== "all") {
            productsToDisplay = products_list.filter(
                  (product) => product.flavor_id === id
            );
            console.log("Filtered products:", productsToDisplay); // Add this line to track filtered products
      }

      displayProducts(productsToDisplay);
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

function addToCart(e) {
      let cartItemId = e.target.parentElement.getAttribute("id");

      let existingCartItem = cartItems.find((item) => item?.itemId == cartItemId);

      let item = products_list.find((item) => item.id == cartItemId);
      let pcs = e.target.parentElement.querySelector(".pcs").textContent;
      let amount = item.price * pcs;

      if (pcs == 0) {
            showToast("Please select the number of cups you want!");
            return;
      }
      if (existingCartItem) {
            existingCartItem.pcs = parseInt(existingCartItem.pcs) + parseInt(pcs);
            existingCartItem.amount = existingCartItem.pcs * item.price;
            showToast(
                  `${pcs} more ${item.name} ice cream/s successfully added to the cart!`
            );
      } else {
            cartItems.push({
                  itemId: cartItemId,
                  pcs: pcs,
                  amount: amount,
            });
            showToast(
                  `${pcs} ${item.name} ice cream/s successfully added to the cart!`
            );
            e.target.textContent = "Already in the cart - Add again?";
      }
      localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));

      displayCartItems();
}

function handleRemoveButtonInCart() {
      let removeBtns = document.querySelectorAll(".remove-cart-item-btn");
      removeBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                  cartItems = cartItems.filter(
                        (item) =>
                              item?.itemId != btn.parentElement.parentElement.getAttribute("id")
                  );
                  const productBox = document.querySelector(
                        `.box[id='${btn.parentElement.parentElement.getAttribute("id")}']`
                  );
                  if (productBox) {
                        const addToCartButton = productBox.querySelector("button");
                        addToCartButton.textContent = "Add to Cart";
                  }
                  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));
                  displayCartItems();
            });
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

      let subtotal = 0,
            noOfItems = 0;

      cartItems.map((ci) => {
            let itemLi = document.createElement("li");
            itemLi.setAttribute("id", ci.itemId);

            let product = products_list.find((p) => p.id == ci.itemId); // Move this line here

            if (product) {
                  itemLi.innerHTML = `
                                                            <img src="${product.image}" alt="">
                                                            <div class="text">
                                                                        <span class="name">${product.name}</span>
                                                                        <div class="qty qtycart">
                                                                              <span class="decrease decreasecart">-</span>
                                                                              <span class="pcs pcscart">${ci.pcs}</span>
                                                                              <span class="increase increasecart">+</span>
                                                                        </div>
                                                                        <div class="price">$${ci.amount}</div>
                                                                        <i class="fa fa-trash remove-cart-item-btn" aria-hidden="true"></i>
                                                            </div>
                                                            
                                                `;

                  cartUlList.appendChild(itemLi);
                  handleRemoveButtonInCart();

                  subtotal += Number.parseFloat(ci.amount);
                  noOfItems += Number.parseInt(ci.pcs);
            } else {
                  console.error(`Product with ID ${ci.itemId} not found`);
            }
      });

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
                  setTimeout(() => {
                        qtySpan.textContent = currentQty + 1;
                  }, 600); // 0.6 second delay
            } else if (e.target.classList.contains("decrease")) {
                  const qtySpan = e.target.nextElementSibling;
                  let currentQty = parseInt(qtySpan.textContent);
                  if (currentQty > 1) {
                        setTimeout(() => {
                              qtySpan.textContent = currentQty - 1;
                        }, 1000); // 1 second delay
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
        let cartItem = cartItems.find((item) => item.itemId == itemId);

        if (e.target.classList.contains("increase")) {
            const qtySpan = e.target.previousElementSibling;
            let currentQty = parseInt(qtySpan.textContent);
            console.log(`Increasing cart quantity for item ${itemId} from ${currentQty} to ${currentQty + 1}`);
            qtySpan.textContent = currentQty + 1;
            cartItem.pcs = currentQty + 1;
            cartItem.amount = cartItem.pcs * products_list.find((p) => p.id == itemId).price;

            const priceElement = e.target.closest("li").querySelector(".price");
            priceElement.textContent = `$${cartItem.amount.toFixed(2)}`; 

            localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));
            updateSubtotal();
        }

        if (e.target.classList.contains("decrease")) {
            const qtySpan = e.target.nextElementSibling;
            let currentQty = parseInt(qtySpan.textContent);
            if (currentQty > 1) {
                console.log(`Decreasing cart quantity for item ${itemId} from ${currentQty} to ${currentQty - 1}`);
                qtySpan.textContent = currentQty - 1;
                cartItem.pcs = currentQty - 1;
                cartItem.amount = cartItem.pcs * products_list.find((p) => p.id == itemId).price;

                const priceElement = e.target.closest("li").querySelector(".price");
                priceElement.textContent = `$${cartItem.amount.toFixed(2)}`;

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
                    <span class="qty">${wi.pcs}</span> x ${product.price} <br>
                    <div class="price">$${wi.amount}</div>
                    <i class="fa fa-trash remove-wishlist-item-btn" aria-hidden="true"></i>
                </div>
                <div class="qty qtycart">
                    <span class="decrease decreasecart">-</span>
                    <span class="pcs pcscart">${wi.pcs}</span>
                    <span class="increase increasecart">+</span>
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