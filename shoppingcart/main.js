let cartTotal = 0;

let shoppingcart = [
  { name: "t-shirt", price: 20 },
  { name: "jeans", price: 50 },
  { name: "sneakers", price: 80 },
  { name: "backpack", price: 30 },
];

function addToCartTotal(item) {
  console.log("item added:", item.name);
  console.log("item price:", item.price);
  cartTotal = cartTotal + item.price;
  console.log("running total:", total);
}
shoppingcart.forEach(addToCartTotal);

if (cartTotal > 100) {
  cartTotal = cartTotal * 0.9;
}
console.log("Your cart total is :", cartTotal);
