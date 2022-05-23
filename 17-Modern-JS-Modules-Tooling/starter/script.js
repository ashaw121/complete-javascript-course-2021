console.log('Importing module');

// import { addToCart, totalPrice, totalQuantity } from './ShoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

// import * as ShoppingCart from './ShoppingCart.js';
// ShoppingCart.addToCart('beef', 10);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

import add, { cart } from './shoppingCart.js';
add("cow's milk", 15);
add('soup', 1);
add('windex', 3);
add('oranges', 2);

console.log(cart);

// console.log('Fetching');
// // Top level await, only works if type='module' in script HTML tag
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Fetched');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('Apples', 4);
console.log(shoppingCart2);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 3 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
