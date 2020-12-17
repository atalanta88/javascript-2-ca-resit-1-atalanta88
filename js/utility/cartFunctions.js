export function getIceCreamCart() {
  const carts = localStorage.getItem("cartItems");
  if (carts === null) {
    return [];
  } else {
    return JSON.parse(carts);
  }
}
