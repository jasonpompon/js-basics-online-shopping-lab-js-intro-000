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
 const randomPrice = Math.floor(Math.random() * 100)

 // create object from item name and price
 const itemObj = { [item] : randomPrice }

 // add newly created object to cart array
 if (itemObj) {
     cart.push(itemObj)
     console.log(`${item} has been added to your cart.`)
     return cart;
 }
}

function viewCart() {
  // write your code here
  // loop over array of objects and print key value pairs in a string

  var statement = 'In your cart, you have';

  if (cart.length === 0) {
      statement = 'Your shopping cart is empty.';
      console.log(statement);
  } else if (cart.length === 1) {
      statement = `${statement} ${Object.keys(cart[0]).join()} at $${Object.values(cart[0]).join()}.`
      console.log(statement);
  } else if (cart.length === 2) {
      statement = `${statement} ${Object.keys(cart[0]).join()} at $${Object.values(cart[0]).join()} and ${Object.keys(cart[1]).join()} at $${Object.values(cart[1]).join()}.`
      console.log(statement);
  } else {
      var itemsArr = []
      var symbole = "";

      for (var i = 0; i < cart.length; i++) {

    	if (Object.values(cart[i]).join() === Object.values(cart[cart.length - 2]).join()) {
        	symbole = ", and"
        } else if (Object.values(cart[i]).join() === Object.values(cart[cart.length - 1]).join()) {
        	symbole = "."
        } else {
        	symbole = ","
        }

        itemsArr.push(Object.keys(cart[i]).join() + " at " + "$" + Object.values(cart[i]).join() + `${symbole}`)
     }

      statement = statement + " " + itemsArr.join(" ")
  }

  return statement;
}

function total() {
  // write your code here
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
      const itemName = Object.keys(cart[i]);
      const itemPrice = cart[i][itemName];

      totalCost = totalCost + itemPrice
  }

  return totalCost
}

function removeFromCart(item) {
  // write your code here
  // for (let i = 0; i < cart.length; i++) {
  //
  //
  //
  //
  //
  //     if (cart[i].hasOwnProperty(item)) {
  //         cart = [...cart.slice(0,i),...cart.slice(i+1)]
  //     } else if (cart[i].hasOwnProperty(item) === false) {
  //         console.log('That item is not in your cart.');
  //     }
  // }
  //
  // return cart
}

function placeOrder(cardNumber) {
  // write your code here
}