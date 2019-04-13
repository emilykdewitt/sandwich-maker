import price from '../components/price.js';
import util from '../helpers/util.js';

const printToDom = util.printToDom;

const addBread = price.addBread;
const addMeat = price.addMeat;
const addCheese = price.addCheese;
const addVeggie = price.addVeggie;
const addCondiment = price.addCondiment;

let selectedBreads = [];
let selectedMeats = [];
let selectedCheeses= [];
let selectedVeggies = [];
let selectedCondiments = [];

let ingredientPrices = [];

const printCategory = (category, targetDiv) => {
    let domString = ``;
    category.forEach((item) => {
        domString += `<li>${item}</li>`
    })
    printToDom(targetDiv, domString)
};

const buttonClick = (e) => {
    const buttonId = e.target.id;
    const checkbox = document.getElementById(buttonId);
    const buttonName = e.target.name;
    if (buttonName === "Meats") {
        let meatType = buttonId;
        if (checkbox.checked === true) {
            selectedMeats.push(meatType);
            ingredientPrices.push(addMeat(meatType));
        } else if (checkbox.checked === false) {
            let index = selectedMeats.indexOf(buttonId);
            selectedMeats.splice(index, 1);
            let price = -Math.abs(addMeat(meatType));
            ingredientPrices.push(price);
        }
    } else if (buttonName === "Breads") {
        let breadType = buttonId;
        if (checkbox.checked === true) {
            selectedBreads.push(breadType);
            ingredientPrices.push(addBread(breadType));
        } else if (checkbox.checked === false) {
            let index = selectedBreads.indexOf(buttonId);
            selectedBreads.splice(index, 1);
            let price = -Math.abs(addBread(breadType));
            ingredientPrices.push(price);
        }
    } else if (buttonName === "Cheeses") {
        let cheeseType = buttonId;
        if (checkbox.checked === true) {
            selectedCheeses.push(cheeseType);
            ingredientPrices.push(addCheese(cheeseType));
        } else if (checkbox.checked === false) {
            let index = selectedCheese.indexOf(buttonId);
            selectedCheeses.splice(index, 1);
            let price = -Math.abs(addCheese(cheeseType));
            ingredientPrices.push(price);
        }
    } else if (buttonName === "Condiments") {
        let condimentType = buttonId;
        if (checkbox.checked === true) {
            selectedCondiments.push(condimentType);
            ingredientPrices.push(addCondiment(condimentType));
        } else if (checkbox.checked === false) {
            let index = selectedCondiment.indexOf(buttonId);
            selectedCondiments.splice(index, 1);
            let price = -Math.abs(addCondiment(condimentType));
            ingredientPrices.push(price);
        }
    } else if (buttonName === "Veggies") {
        let veggieType = buttonId;
        if (checkbox.checked === true) {
            selectedVeggies.push(veggieType);
            ingredientPrices.push(addVeggie(veggieType));
        } else if (checkbox.checked === false) {
            let index = selectedVeggie.indexOf(buttonId);
            selectedVeggies.splice(index, 1);
            let price = -Math.abs(addVeggie(veggieType));
            ingredientPrices.push(price);
        }
    }

    printCategory(selectedBreads,'breadChoices');
    printCategory(selectedMeats, 'meatChoices');
    printCategory(selectedCheeses, 'cheeseChoices');
    printCategory(selectedVeggies, 'veggieChoices');
    printCategory(selectedCondiments, 'condimentChoices');

    let total = ingredientPrices.reduce(function(sum, order) {
        return sum + order.amount;
    })
    console.log(total);
    // printToDom('totalPrice', )
};

const buttonEvents = () => {
    document.getElementById('white').addEventListener('change', buttonClick);
    document.getElementById('wheat').addEventListener('change', buttonClick);
    document.getElementById('ciabatta').addEventListener('change', buttonClick);
    document.getElementById('pita').addEventListener('change', buttonClick);
    document.getElementById('breadless').addEventListener('change', buttonClick);
    document.getElementById('swiss').addEventListener('change', buttonClick);
    document.getElementById('american').addEventListener('change', buttonClick);
    document.getElementById('muenster').addEventListener('change', buttonClick);
    document.getElementById('gouda').addEventListener('change', buttonClick);
    document.getElementById('cheeseless').addEventListener('change', buttonClick);
    document.getElementById('turkey').addEventListener('change', buttonClick);
    document.getElementById('ham').addEventListener('change', buttonClick);
    document.getElementById('salami').addEventListener('change', buttonClick);
    document.getElementById('tofu').addEventListener('change', buttonClick);
    document.getElementById('meatless').addEventListener('change', buttonClick);
    document.getElementById('lettuce').addEventListener('change', buttonClick);
    document.getElementById('tomato').addEventListener('change', buttonClick);
    document.getElementById('cucumber').addEventListener('change', buttonClick);
    document.getElementById('pickles').addEventListener('change', buttonClick);
    document.getElementById('veggieless').addEventListener('change', buttonClick);
    document.getElementById('mustard').addEventListener('change', buttonClick);
    document.getElementById('mayonnaise').addEventListener('change', buttonClick);
    document.getElementById('oil').addEventListener('change', buttonClick);
    document.getElementById('vinegar').addEventListener('change', buttonClick);
    document.getElementById('condimentless').addEventListener('change', buttonClick);
};

export default { buttonEvents };
  