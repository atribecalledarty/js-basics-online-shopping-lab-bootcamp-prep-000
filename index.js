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
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else {
    var sentence = "In your cart, you have "
    for (var i = 0; i < cart.length; i++){
      sentence = sentence + cart[i].itemName + ' at $' + cart[i].itemPrice
      if (cart.length === 1){
        sentence = sentence + '.'
      }else if (cart.length === 2){
        if (i === 0){
          sentence = sentence + ', and '
        } else {
          sentence = sentence + '.'
        }
        
      }else if (cart.length >= 3){
        if (i < (cart.length - 2)){
          sentence = sentence + ', '
        } else if (i === (cart.length - 2)){
          sentence = sentence + ', and '
        } else {
          sentence = sentence + '.'
        }
      }
    }
  }
  return sentence
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
