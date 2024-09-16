import products_list from "/script/product_database.js";

const cartUlList = document.querySelector(".cart-list-items");
const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
let cartItems = [];

console.log(addToCartBtns);
addToCartBtns.forEach(btn => {
    console.log("add")
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
    let item = getItem(cartItemId)[0];
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
    for(let i=0;i<cartItems.length;i++) {
        if(cartItems[i].itemId == pid) {
            return true;
        }
    }
    return false;
}


function removeFromCartList(cartId) {
    for(let i=0;i<cartItems.length;i++) {
        if(cartItems[i].cartId== cartId) {
            cartItems.splice(i, 1);
            break;
        }
    }
}

function getItem(pid) {
    const item = products_list.filter((product) => {
        if (product.id == pid) {
            return product;
        }
    })
    return item;
}

function getSubtotal() {
    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal+=item.amount;
    });
    console.log(subtotal);
    return subtotal;
}

function displaySubTotal() {
    const subtotal = document.querySelector(".sub-total");
    console.log(subtotal);
    subtotal.textContent = "$" + getSubtotal();
}

function getNoOfCartItems() {
    let noOfItems = 0;
    cartItems.forEach(item => {
        noOfItems+=parseInt(item.pcs);
    });
    console.log(noOfItems);
    return noOfItems;
}

function displayNoOfCartItems() {
    const noOfItems = document.querySelector(".no-of-cart-items");
    console.log(noOfItems);
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









