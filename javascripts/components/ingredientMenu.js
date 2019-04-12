//call separate ingredients to print to the DOM to create the menu
//add a button to each ingredient to allow user to add to their sandwich


import util from '../helpers/util.js'
import breads from '../components/breads.js'
import meats from '../components/meats.js'
import cheeses from '../components/cheeses.js'
import veggies from '../components/veggies.js'
import condiments from '../components/condiments.js'

const allIngredients = [breads, meats, cheeses, veggies, condiments]

const makeMenu = () => {
    let breadInfo = breads.getBreads();
    let meatInfo = meats.getMeats();
    let cheeseInfo = cheeses.getCheeses();
    let veggieInfo = veggies.getVeggies();
    let condimentInfo = condiments.getCondiments();
    let actualBreadInfo = Object.keys(breadInfo);
    let domString = `<h3>${actualBreadInfo}</h3>`;
    util.printToDom('ingredientMenu', domString);
};

export default { makeMenu};

// import cart from './cart.js';

// import book from '../helpers/book.js';
// import util from '../helpers/util.js';

// const addToCartEvent = (e) => {
//     e.preventDefault();
//     const bookInfo = book.getBook();
//     cart.setCart(bookInfo);
//     cart.cartToDom();
// }

// const makeStore = () => {
//     const bookInfo = book.getBook();
//     let domString = '<h2>Our Only Book</h2>';
//     domString += `<h3>${bookInfo.price}</h3>`;
//     domString += `<img src="${bookInfo.image}" alt="book cover" class="book-cover">`;
//     domString += `<button id="cartBtn" class="btn btn-danger">Add to Cart</button>`;
//     util.printToDom('store-container', domString);
//     document.getElementById('cartBtn').addEventListener('click', addToCartEvent);
// };

// export default { makeStore };