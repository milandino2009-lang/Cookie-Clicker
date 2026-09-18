let cookie = 0;
let cookiePerClick = 1;

const cookieButton = document.getElementById('cookiebutton');
const cookieCount = document.getElementById('cookiecount');

function showUpgradeEffect(button) {
    button.classList.remove('upgrade-purchased');
    void button.offsetWidth;
    button.classList.add('upgrade-purchased');
}

cookieButton.addEventListener('click', () => {
    cookie += cookiePerClick;
    cookieCount.textContent = cookie;
});

const upgradeButton = document.getElementById('upgrade');
const upgradeCount = document.getElementById('upgradecount');
let upgradeCost = 50;
let upgradesOwned = 0;

upgradeButton.textContent = `Upgrade klik: ${upgradeCost} stardust`;

upgradeButton.addEventListener('click', () => {
    if (cookie >= upgradeCost) {
        cookie -= upgradeCost;
        cookiePerClick++;
        upgradesOwned++;
        upgradeCost += 50;
        upgradeCount.textContent = upgradesOwned;
        cookieCount.textContent = cookie;
        upgradeButton.textContent = `Upgrade klik: ${upgradeCost} stardust`;
        showUpgradeEffect(upgradeButton);
    }
});

const grandmaButton = document.getElementById('grandma');
const grandmaCount = document.getElementById('grandmacount');
let grandmaCost = 200;
let grandmaOwned = 0;

grandmaButton.textContent = `Asteroids: ${grandmaCost} stardust`;

grandmaButton.addEventListener('click', () => {
    if (cookie >= grandmaCost) {
        cookie -= grandmaCost;
        grandmaOwned++;
        grandmaCount.textContent = grandmaOwned;
        grandmaCost += 50;
        grandmaButton.textContent = `Asteroids: ${grandmaCost} stardust`;
        showUpgradeEffect(grandmaButton);
    }
});

let grandmaInterval = setInterval(() => {
    cookie += 3 * grandmaOwned;
    cookieCount.textContent = cookie;
}, 1000);

const starButton = document.getElementById('star');
const starCount = document.getElementById('starcOUNT');
let starCost = 600;
let starOwned = 0;

starButton.addEventListener('click', () => {
    if (cookie >= starCost) {
        cookie -= starCost;
        starOwned++;
        starCount.textContent = starOwned;
        starCost += 300;
        starButton.textContent = `Stars: ${starCost} stardust`;
        showUpgradeEffect(starButton);
    }
});

let starInterval = setInterval(() => {
    cookie += 60 * starOwned;
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
        factoryButton.textContent = `Nebulas: ${factoryCost} stardust`;
        showUpgradeEffect(factoryButton);
    }
});

let factoryInterval = setInterval(() => {
    cookie += 100 * factoryOwned;
    cookieCount.textContent = cookie;
}, 1000);

const GalaxiesButton = document.getElementById('Galaxies');
const GalaxiesCount = document.getElementById('Galaxiescount');
let GalaxiesCost = 6000;
let GalaxiesOwned = 0;

GalaxiesButton.addEventListener('click', () => {
    if (cookie >= GalaxiesCost) {
        cookie -= GalaxiesCost;
        GalaxiesOwned++;
        GalaxiesCount.textContent = GalaxiesOwned;
        GalaxiesCost += 1200;
        GalaxiesButton.textContent = `Galaxies: ${GalaxiesCost} stardust`;
        showUpgradeEffect(GalaxiesButton);
    }
});

let GalaxiesInterval = setInterval(() => {
    cookie += 400 * GalaxiesOwned;
    cookieCount.textContent = cookie;
}, 1000);

const BlackHolesButton = document.getElementById('Black holes');
const BlackHolesCount = document.getElementById('Black holescount');
let BlackHolesCost = 15000;
let BlackHolesOwned = 0;

BlackHolesButton.addEventListener('click', () => {
    if (cookie >= BlackHolesCost) {
        cookie -= BlackHolesCost;
        BlackHolesOwned++;
        BlackHolesCount.textContent = BlackHolesOwned;
        BlackHolesCost += 2600;
        BlackHolesButton.textContent = `Black Holes: ${BlackHolesCost} stardust`;
        showUpgradeEffect(BlackHolesButton);
    }
});

let BlackHolesInterval = setInterval(() => {
    cookie += 1000 * BlackHolesOwned;
    cookieCount.textContent = cookie;
}, 1000);

const GalaxyClustersButton = document.getElementById('Galaxy Clusters');
const GalaxyClustersCount = document.getElementById('Galaxy Clusterscount');
let GalaxyClustersCost = 24000;
let GalaxyClustersOwned = 0;

GalaxyClustersButton.addEventListener('click', () => {
    if (cookie >= GalaxyClustersCost) {
        cookie -= GalaxyClustersCost;
        GalaxyClustersOwned++;
        GalaxyClustersCount.textContent = GalaxyClustersOwned;
        GalaxyClustersCost += 3000;
        GalaxyClustersButton.textContent = `Galaxy Clusters: ${GalaxyClustersCost} stardust`;
        showUpgradeEffect(GalaxyClustersButton);
    }
});

let GalaxyClustersInterval = setInterval(() => {
    cookie += 2000 * GalaxyClustersOwned;
    cookieCount.textContent = cookie;
}, 1000);

const superclusterButton = document.getElementById('Superclusters');
const superclusterCount = document.getElementById('Superclusterscount');
let superclusterCost = 50000;
let superclusterOwned = 0;

superclusterButton.addEventListener('click', () => {
    if (cookie >= superclusterCost) {
        cookie -= superclusterCost;
        superclusterOwned++;
        superclusterCount.textContent = superclusterOwned;
        superclusterCost += 5000;
        superclusterButton.textContent = `Superclusters: ${superclusterCost} stardust`;
        showUpgradeEffect(superclusterButton);
    }
});

let superclusterInterval = setInterval(() => {
    cookie += 3000 * superclusterOwned;
    cookieCount.textContent = cookie;
}, 1000);

const TheObservableUniverseButton = document.getElementById('The Observable Universe');
const TheObservableUniverseCount = document.getElementById('The Observable Universecount');
let TheObservableUniverseCost = 100000;
let TheObservableUniverseOwned = 0;

TheObservableUniverseButton.addEventListener('click', () => {
    if (cookie >= TheObservableUniverseCost) {
        cookie -= TheObservableUniverseCost;
        TheObservableUniverseOwned++;
        TheObservableUniverseCount.textContent = TheObservableUniverseOwned;
        TheObservableUniverseCost += 10000;
        TheObservableUniverseButton.textContent = `The Observable Universe: ${TheObservableUniverseCost} stardust`;
        showUpgradeEffect(TheObservableUniverseButton);
    }
});

let TheObservableUniverseInterval = setInterval(() => {
    cookie += 5000 * TheObservableUniverseOwned;
    cookieCount.textContent = cookie;
}, 1000);

const multiverseButton = document.getElementById('Multiverse');
const multiverseCount = document.getElementById('Multiversecount');
let multiverseCost = 250000;
let multiverseOwned = 0;

multiverseButton.textContent = `Multiverse: ${multiverseCost} stardust`;

multiverseButton.addEventListener('click', () => {
    if (cookie >= multiverseCost) {
        cookie -= multiverseCost;
        multiverseOwned++;
        multiverseCount.textContent = multiverseOwned;
        multiverseCost += 25000;
        multiverseButton.textContent = `Multiverse: ${multiverseCost} stardust`;
        cookieCount.textContent = cookie;
        showUpgradeEffect(multiverseButton);
    }
});

let multiverseInterval = setInterval(() => {
    cookie += 15000 * multiverseOwned;
    cookieCount.textContent = cookie;
}, 1000);

