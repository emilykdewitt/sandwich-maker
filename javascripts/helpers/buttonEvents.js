import buttonClick from '../components/ingredientMenu.js';

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
  