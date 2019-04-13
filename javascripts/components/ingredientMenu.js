import util from '../helpers/util.js'
import cart from './cart.js'

import breads from '../components/breads.js'
import meats from '../components/meats.js'
import cheeses from '../components/cheeses.js'
import veggies from '../components/veggies.js'
import condiments from '../components/condiments.js'

const Breads = breads.getBreads();
const Meats = meats.getMeats();
const Cheeses = cheeses.getCheeses();
const Veggies = veggies.getVeggies();
const Condiments = condiments.getCondiments();

const allIngredients = [Breads, Meats, Cheeses, Veggies, Condiments];
const ingredientTypes = ['Breads', 'Meats', 'Cheeses', 'Veggies', 'Condiments'];

let catIndex = 0;

const makeMenu = () => {
    let domString = ``;
    allIngredients.forEach((ingType) => {
        domString += `<div id="ingColumns" class="col-5">`
        domString += `<h5>${ingredientTypes[catIndex]}</h5>`;
        let data = Object.entries(ingType);
        data.forEach((option) => {
            domString += `<div class="ingredientInfo">`
            domString +=    `<input type="checkbox" id="${option[0]}" class="btn btn-primary selectBtn"></checkbox>`;
            domString +=    `<p>${option[0]}</p>`;
            domString +=     `<p>(${option[1]})</p>`;
            domString += `</div>`;
        });
        domString += `</div>`;
        catIndex += 1;
    });
    util.printToDom('ingredientMenu', domString);
};

const buttonClick = (e) => {
    const buttonId = e.target.id;
    console.log(buttonId)
    const selectedIngredients = [];
    allIngredients.forEach((ingType) => {
        let data = Object.keys(ingType);
        data.forEach((option) => {
            if (option[0] === buttonId) {
                selectedIngredients.push(option)
            }
            else return;
        });
    })
    console.log(selectedIngredients);
};

export default { makeMenu, buttonClick };

