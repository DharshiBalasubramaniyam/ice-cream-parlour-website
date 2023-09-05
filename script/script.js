// nav bar scripts

const menu = document.querySelector(".menu");
menu.addEventListener("click", ()=> {
    controlMenu();
})
function controlMenu() {
    const navlinks = document.querySelector(".nav-links");
    if (navlinks.classList.contains("active")) {
        navlinks.classList.remove("active");
    }
    else {
        navlinks.classList.add("active");
    }
}

function controlLinks() {
    const links = document.querySelectorAll(".link");
    const navlinks = document.querySelector(".nav-links");
    links.forEach(link => {
        link.addEventListener("click", ()=> {
            if (navlinks.classList.contains("active")) {
                navlinks.classList.remove("active")
            }
        })
    });
}
controlLinks();

// review section scripts

var swiper = new Swiper(".reviews-box", {
    cssMode: true,
    slidesPerView:3,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:1,
        },
        600: {
            slidesPerView:2,
        },
        1200: {
            slidesPerView:3,
        },
    },
});

// contact form scripts
const contactForm = document.getElementById("contact-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const emailRegex = new RegExp(/[^A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
const phoneRegex = new RegExp(/[^0-9]/, "gm");

contactForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    if (firstname.value.trim()==="") {
        setError(firstname, "First name is required!");
    }
    if (lastname.value.trim()==="") {
        setError(lastname, "Last name is required!");
    }
    if (email.value.trim()==="") {
        setError(email, "Email is required!");
    }
    else if (!emailRegex.test(email.value.trim())){
        setError(email, "Invalid email format!");
    }
    if (phone.value.trim()==="") {
        setError(phone, "Phone number is required!");
    }
    else if (phone.value.trim().length>10 || phoneRegex.test(phone.value.trim())){
        setError(phone, "Contact number must have 10 digits")
    }
    if (message.value.trim()==="") {
        setError(message, "message is required!");
    }
})


// news letter section scripts
const newsletterForm = document.getElementById("news-letter");
const newsletterEmail = document.getElementById("newsletter-email");

newsletterForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    if (newsletterEmail.value.trim()==="") {
        setError(newsletterEmail, "Email is required!")
    }
    else if (!emailRegex.test(newsletterEmail.value.trim())){
        setError(newsletterEmail, "Invalid email format!")
    }
})

function setError(field, errorMessage) {
    const error = field.parentElement.querySelector("small");
    console.log(error)
    error.textContent = errorMessage;
}


// products section scripts
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


// cart scripts
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
    let item = getItem(cartItemId)[0];
    let pcs = e.parentElement.querySelector(".pcs").textContent;
    let amount = item.price * pcs;

    if (pcs>0) {
        itemLi.innerHTML = `<img src="${item.image}" alt="">
                        <div class="text">
                            <span class="name">${item.name}</span><br>
                            <span class="qty">${pcs}</span> x ${item.price} <br>
                            <div class="price">$${amount}</div>
                            <i class="fa fa-times remove" aria-hidden="true"></i>
                        </div>`;             
        
        cartUlList.appendChild(itemLi);
        removeItemFromCart();

    }
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









