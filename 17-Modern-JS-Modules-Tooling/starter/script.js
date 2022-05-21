console.log('Importing module');

// import { addToCart, totalPrice, totalQuantity } from './ShoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

// import * as ShoppingCart from './ShoppingCart.js';
// ShoppingCart.addToCart('beef', 10);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

import add from './ShoppingCart.js';
add("cow's milk", 15);
add('soup', 1);
add('windex', 3);
add('oranges', 2);

import { cart } from './ShoppingCart.js';
console.log(cart);
