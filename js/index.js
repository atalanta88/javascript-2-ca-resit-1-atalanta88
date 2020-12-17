import iceCreams from "./data/iceCreams.js";
import { getIceCreamCart } from ".//utility/cartFunctions.js";

const container = document.querySelector(".ice-creams");
const cart = getIceCreamCart();

iceCreams.forEach((iceCreamFlavours) => {
  let cssClass = "far";
  // console.log(cart);

  const doesObjectExist = cart.find(function (cart) {
    return parseInt(cart.id) === iceCreamFlavours.id;
  });
  // console.log(doesObjectExist);

  if (doesObjectExist) {
    cssClass = "fa";
  }

  /*console.log(iceCreamFlavours);*/
  container.innerHTML += `<div class="ice-cream">
                            <h2 style="color:${iceCreamFlavours.colour}">${iceCreamFlavours.name}</h2>
                            <h3>${iceCreamFlavours.flavours}</h3>
                            <p class="price"style="background:${iceCreamFlavours.colour}">${iceCreamFlavours.price} £</p>
                            <i class="${cssClass} fa-star" data-id="${iceCreamFlavours.id}" data-name="${iceCreamFlavours.name}" data-price="${iceCreamFlavours.price}" data-color="${iceCreamFlavours.colour}"></i>
        
        
        
        </div>  
        `;
});

const cartIcon = document.querySelectorAll(".ice-cream i");

cartIcon.forEach((icon) => {
  icon.addEventListener("click", handleClick);
});

function handleClick() {
  this.classList.toggle("fa");
  this.classList.toggle("far");

  const id = this.dataset.id;
  const name = this.dataset.name;
  const price = this.dataset.price;
  const color = this.dataset.color;

  const currentCart = getIceCreamCart();

  const productExists = currentCart.find(function (cart) {
    return cart.id === id;
  });

  if (!productExists) {
    // console.log("productExists", productExists);
    const product = { id, name, price, color };
    currentCart.push(product);
    saveCart(currentCart);
  } else {
    const newCart = currentCart.filter((cart) => cart.id !== id);
    saveCart(newCart);
  }
}

function saveCart(carts) {
  localStorage.setItem("cartItems", JSON.stringify(carts));
}
