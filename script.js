let cookie = 0;
let cookiePerClick = 1;

const cookieButton = document.getElementById('cookiebutton');
const cookieCount = document.getElementById('cookiecount');

cookieButton.addEventListener('click', () => {
    cookie += cookiePerClick;
    cookieCount.textContent = cookie;
});

const upgradeButton = document.getElementById('upgrade');
const upgradeCount = document.getElementById('upgradecount');
let upgradeCost = 50;
let upgradesOwned = 0;

upgradeButton.textContent = `Upgrade klik: ${upgradeCost} cookies`;

upgradeButton.addEventListener('click', () => {
    if (cookie >= upgradeCost) {
        cookie -= upgradeCost;
        cookiePerClick++;
        upgradesOwned++;
        upgradeCost += 50;
        upgradeCount.textContent = upgradesOwned;
        cookieCount.textContent = cookie;
        upgradeButton.textContent = `Upgrade klik: ${upgradeCost} cookies`;
    }
});

const grandmaButton = document.getElementById('grandma');
const grandmaCount = document.getElementById('grandmacount');
let grandmaCost = 10;
let grandmaOwned = 0;

grandmaButton.textContent = `Grandma is ${grandmaCost} cookies`;

grandmaButton.addEventListener('click', () => {
    if (cookie >= grandmaCost) {
        cookie -= grandmaCost;
        grandmaOwned++;
        grandmaCount.textContent = grandmaOwned;
        grandmaCost += 5;
        grandmaButton.textContent = `Grandma is ${grandmaCost} cookies`;
    }
});

let grandmaInterval = setInterval(() => {
    cookie += 3 * grandmaOwned;
    cookieCount.textContent = cookie;
}, 1000);

const farmButton = document.getElementById('farm');
const farmCount = document.getElementById('farmcount');
let farmCost = 400;
let farmOwned = 0;

farmButton.addEventListener('click', () => {
    if (cookie >= farmCost) {
        cookie -= farmCost;
        farmOwned++;
        farmCount.textContent = farmOwned;
        farmCost += 250;
        farmButton.textContent = `Farm is ${farmCost} cookies`;
    }
});

let farmInterval = setInterval(() => {
    cookie += 40 * farmOwned;
    cookieCount.textContent = cookie;
}, 1000);

const factoryButton = document.getElementById('factory');
const factoryCount = document.getElementById('factorycount');
let factoryCost = 1000;
let factoryOwned = 0;

factoryButton.addEventListener('click', () => {
    if (cookie >= factoryCost) {
        cookie -= factoryCost;
        factoryOwned++;
        factoryCount.textContent = factoryOwned;
        factoryCost += 500;
        factoryButton.textContent = `Factory is ${factoryCost} cookies`;
    }
});

let factoryInterval = setInterval(() => {
    cookie += 100 * factoryOwned;
    cookieCount.textContent = cookie;
}, 1000);