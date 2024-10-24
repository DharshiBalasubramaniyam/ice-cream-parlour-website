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

});

function displayProducts(products) {
      let productsSection = document.querySelector(".products-box");
      if (productsSection) {
            productsSection.innerHTML = ""; 
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
            let cartItem = cartItems.find((item) => item.itemId == itemId);

            if (e.target.classList.contains("increase")) {
                  const qtySpan = e.target.previousElementSibling;
                  let currentQty = parseInt(qtySpan.textContent);
                  qtySpan.textContent = currentQty + 1;
                  cartItem.pcs = currentQty + 1;
                  cartItem.amount =
                        cartItem.pcs * products_list.find((p) => p.id == itemId).price;

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
                        cartItem.amount =
                              cartItem.pcs * products_list.find((p) => p.id == itemId).price;

                        const priceElement = e.target.closest("li").querySelector(".price");
                        priceElement.textContent = `$${cartItem.amount.toFixed(2)}`;

                        const textQtyElement = e.target
                              .closest("li")
                              .querySelector(".text .qty");
                        textQtyElement.textContent = cartItem.pcs;

                        localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));

                        updateSubtotal();
                  }
            }
      });
}

document.addEventListener("DOMContentLoaded", () => {
      // Apply ScrollReveal to products
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

function createSearchBar() {
      const searchBarContainer = document.querySelector(".search-container");

      // Check if the search bar already exists
      if (document.getElementById("search-bar")) return;

      // Create the search bar only if it doesn't already exist
      const searchBar = document.createElement("input");
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
            const filteredProducts = products_list.filter((product) => {
                  const flavorName = flavor_list
                        .find((f) => f.id === product.flavor_id)
                        ?.name.toLowerCase();
                  return (
                        product.name.toLowerCase().includes(query) || flavorName.includes(query)
                  );
            });
            displayProducts(filteredProducts);
      });

      // Handle input event for live search
      handleSearchInput();
}

function handleSearchInput() {
      const searchInput = document.getElementById("search-bar");
      searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            const filteredProducts = products_list.filter((product) => {
                  const flavorName = flavor_list
                        .find((f) => f.id === product.flavor_id)
                        ?.name.toLowerCase();
                  return (
                        product.name.toLowerCase().includes(query) || flavorName.includes(query)
                  );

            });
            displayProducts(filteredProducts);
      });
}

