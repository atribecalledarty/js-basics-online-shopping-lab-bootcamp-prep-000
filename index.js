var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {itemName: item}
 newItem.itemPrice = Math.random() * (100 - 1) + 1
 cart.push(newItem)
 return newItem.itemName + ' has been added to your cart.'
 
}

function viewCart() {
  // write your code here
  var sentence = "In your cart, you have "
  for (var i = 0; i < cart.length; i++){
    sentence = sentence + cart[i].itemName + ' at $' + cart[i].itemPrice
    if (i === (cart.length - 1)){
      sentence = sentence + '.'
    }else {
      sentence = sentence + ', '
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
