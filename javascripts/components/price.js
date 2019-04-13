import breads from '../components/breads.js'
import meats from '../components/meats.js'
import cheeses from '../components/cheeses.js'
import veggies from '../components/veggies.js'
import condiments from '../components/condiments.js'

const addMeat = (meatType) => {
    let meatObj = meats.getMeats();
    let price = meatObj[meatType];
    return price;
};

const addBread = (breadType) => {
    let breadObj = breads.getBreads();
    let price = breadObj[breadType];
    return price;
};

const addCheese = (cheeseType) => {
    let cheeseObj = cheeses.getCheeses();
    let price = cheeseObj[cheeseType];
    return price;
};

const addVeggie = (veggieType) => {
    let veggieObj = veggies.getVeggies();
    let price = veggieObj[veggieType];
    return price;
};

const addCondiment = (condimentType) => {
    let condimentObj = condiments.getCondiments();
    let price = condimentObj[condimentType];
    return price;
};

export default { addBread, addMeat, addCheese, addVeggie, addCondiment };