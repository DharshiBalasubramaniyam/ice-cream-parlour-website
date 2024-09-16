import products_list from "/script/product_database.js";

const cartUlList = document.querySelector(".cart-list-items");
const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
let cartItems = [];

console.log(addToCartBtns);
addToCartBtns.forEach(btn => {
    btn.addEventListener("click", ()=> {
        addToCart(btn);
    });
});

function addToCart(e) {
    let cartItemId = e.parentElement.getAttribute("id");

    if (checkItem(cartItemId)) {
        alert("The item already in your cart!");
        return;
    }

    let itemLi = document.createElement("li");
    itemLi.setAttribute("id", "c00" + (cartItems.length+1));
    let item = getItem(cartItemId);
    let pcs = e.parentElement.querySelector(".pcs").textContent;
    let amount = item.price * pcs;

    if (pcs == 0) {
        alert("Please select number of cups you want!");
        return;
    }

    itemLi.innerHTML = `<img src="${item.image}" alt="">
                        <div class="text">
                            <span class="name">${item.name}</span><br>
                            <span class="qty">${pcs}</span> x ${item.price} <br>
                            <div class="price">$${amount}</div>
                            <i class="fa fa-times remove" aria-hidden="true"></i>
                        </div>`;             
        
    cartUlList.appendChild(itemLi);
    removeItemFromCart();

    addToCartList("c00" + (cartItems.length+1), cartItemId, pcs, amount);
    displaySubTotal();
    displayNoOfCartItems();
    console.log(cartItems);
    alert(`${pcs} ${item.name} ice cream successfully added to the cart!`);
}


function removeItemFromCart() {
    let removeBtns = document.querySelectorAll(".remove");
    console.log(removeBtns);
    removeBtns.forEach(btn => {
        btn.addEventListener("click", ()=> {
            removeFromCartList(btn.parentElement.parentElement.getAttribute("id"));
            btn.parentElement.parentElement.remove();
            displaySubTotal();
            displayNoOfCartItems()
            console.log("removed");
        })
    });
    
}


function addToCartList(cid, id, pcs, amount) {
    let itemObject = {
        cartId:cid,
        itemId: id,
        pcs: pcs,
        amount: amount 
    }
    cartItems.push(itemObject);
}

function checkItem(pid) {
    return cartItems.filter(item => item?.itemId == pid).length != 0;
}


function removeFromCartList(cartId) {
    cartItems = cartItems.filter(item => item?.cartId != cartId)
}

function getItem(pid) {
    return products_list.find(item => item.id == pid);
}

function getSubtotal() {
    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal+=item.amount;
    });
    return subtotal;
}

function displaySubTotal() {
    const subtotal = document.querySelector(".sub-total");
    subtotal.textContent = "$" + getSubtotal();
}

function getNoOfCartItems() {
    let noOfItems = 0;
    cartItems.forEach(item => {
        noOfItems+=parseInt(item.pcs);
    });
    return noOfItems;
}

function displayNoOfCartItems() {
    const noOfItems = document.querySelector(".no-of-cart-items");
    noOfItems.textContent = getNoOfCartItems();

    let emptyCart = document.querySelector(".empty-cart");
    let cartContent = document.querySelector(".no-empty-cart");
    if (noOfItems.textContent>0) {
        cartContent.classList.add("active");
        emptyCart.classList.remove("active");
        
    }
    else {
        cartContent.classList.remove("active");
        emptyCart.classList.add("active");
        console.log("h");
    }
}

const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const close = document.querySelector(".close-cart");

cartIcon.addEventListener("click", () => {
    if (cart.classList.contains("active")) {
        cart.classList.remove("active");
    }
    else {
        cart.classList.add("active");
    }
})

close.addEventListener("click", () => {
    cart.classList.remove("active");
})









