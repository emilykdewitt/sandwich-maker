import util from '../helpers/util.js';

const mySandwich = [];

const getSandwich = () => {
    return sandwich;
};

const addToSandwich = (ingredient) => {
    mySandwich.push(ingredient);
};

const displayPrice = (e) => {
    e.preventDefault();
    const mySandwich = getSandwich();
    const total = mySandwich.reduce((a, b) => {return a + b.price}, 0);
    printToDom('price', `$${total.toFixed(2)}`);
};

const sandwichToDom = () => {
    const mySandwich = getSandwich();
    let domString = '<div class="row">';
    domString += '<h2>Cart:</h2>';
    domString += '<button id="purchase-btn" class="btn btn-secondary">Purchase</button>'
    domString += '</div><div class="row d-flex flex-wrap">';
    mySandwich.forEach((ingredient) => {
      domString += `<div class="card col-2">`;
      domString += `  <img src=${book.image} class="card-img-top" alt="book cover">`;
      domString += `  <div class="card-body">`;
      domString += `    <h5 class="card-title">${book.title}</h5>`;
      domString += `    <p class="card-text">${book.price}</p>`;
      domString += `  </div>`;
      domString += `</div>`;
    });
    domString += `</div>`;
    util.printToDom('cart-container', domString);
    document.getElementById('purchase-btn').addEventListener('click', buyEvent);
};

export default { setCart, cartToDom };