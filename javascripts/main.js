import ingredientMenu from './components/ingredientMenu.js';
import buttons from './helpers/buttons.js'

const makeMenu = ingredientMenu.makeMenu;
const makePriceList = ingredientMenu.makePriceList;
const buttonEvents = buttons.buttonEvents;

const init = () => {
    makeMenu();
    makePriceList();
    buttonEvents();
};

init();