import { getIceCreamCart } from "./utility/cartFunctions.js";
import { clearAllStorage } from "./utility/clearStorage.js";

const cart = getIceCreamCart();

clearAllStorage();
const cartContainer = document.querySelector(".cart");
const cartTotalPrice = document.querySelector(".total-price");
let totalPrice = null;
const cartTotalItems = document.querySelector(".total");
let totalItems = null;

if (cart.length === 0) {
  cartContainer.innerHTML = "Empty cart";
}

cart.forEach((cartItem) => {
  cartContainer.innerHTML += ` <div class="cart-item">
                               <h2 style="color:${cartItem.color}">${cartItem.name}</h2>
                               <p class="cart-price">${cartItem.price} £</p>
                               <i class="fas fa-times" data-id="${cartItem.id}"></i>
                               </div>  
    `;

  totalPrice = totalPrice + parseFloat(cartItem.price);
  cartTotalPrice.innerHTML = `
                            Total price: <b></b> ${totalPrice} £
                              `;
  totalItems = cart.length;
  cartTotalItems.innerHTML = `
                            Total items: <b></b> ${totalItems}
                              `;
});

const cartIcon = document.querySelectorAll(".cart-item i");

cartIcon.forEach((icon) => {
  icon.addEventListener("click", handleClick);
});

function handleClick() {
  const id = this.dataset.id;

  const currentCart = getIceCreamCart();

  const productExists = currentCart.find(function (cart) {
    return cart.id === id;
  });

  const deleteItem = confirm("Remove this item?");

  if (deleteItem === false) {
  } else {
    if (!productExists) {
      //console.log("productExists", productExists);
      const product = { id };
      currentCart.pull(product);
      saveCart(currentCart);
    } else {
      const newCart = currentCart.filter((cart) => cart.id !== id);
      saveCart(newCart);
      window.location.reload();
    }
  }
}

function saveCart(carts) {
  localStorage.setItem("cartItems", JSON.stringify(carts));
}
