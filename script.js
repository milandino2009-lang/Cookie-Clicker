class Upgrade {
    constructor(game, { id, countId, name, cost, costIncrease }) {
        this.game = game;
        this.button = document.getElementById(id);
        this.count = document.getElementById(countId);
        this.name = name;
        this.cost = cost;
        this.costIncrease = costIncrease;
        this.owned = 0;

        this.button.addEventListener('click', () => this.buy());
        this.render();
    }

    buy() {
        if (this.game.stardust < this.cost) {
            return;
        }

        this.game.stardust -= this.cost;
        this.owned++;
        this.cost += this.costIncrease;
        this.render();
        this.game.renderStardust();
        this.showPurchaseEffect();
        this.onPurchase();
    }

    onPurchase() {
        
    }

    render() {
        this.button.textContent = `${this.name}: ${this.cost} stardust`;
        this.count.textContent = this.owned;
    }

    showPurchaseEffect() {
        this.button.classList.remove('upgrade-purchased');
        void this.button.offsetWidth;
        this.button.classList.add('upgrade-purchased');
    }
}

class ClickUpgrade extends Upgrade {
    constructor(game, settings) {
        super(game, settings);
        this.button.textContent = `Upgrade klik: ${this.cost} stardust`;
    }

    onPurchase() {
        this.game.cookiePerClick++;
    }
}

class ProductionUpgrade extends Upgrade {
    constructor(game, settings) {
        super(game, settings);
        this.production = settings.production;
    }

    produce() {
        return this.production * this.owned;
    }
}

class Game {
    constructor() {
        this.stardust = 0;
        this.cookiePerClick = 1;
        this.cookieButton = document.getElementById('cookiebutton');
        this.cookieCount = document.getElementById('cookiecount');
        this.upgrades = [];

        this.cookieButton.addEventListener('click', () => this.clickForStardust());
        this.createUpgrades();
        this.renderStardust();
        setInterval(() => this.collectProduction(), 1000);
    }
    createUpgrades() {
        this.upgrades.push(new ClickUpgrade(this, {
            id: 'upgrade', countId: 'upgradecount', name: 'Upgrade klik', cost: 50, costIncrease: 50
        }));

        const productionSettings = [
            { id: 'grandma', countId: 'grandmacount', name: 'Asteroids', cost: 200, costIncrease: 50, production: 3 },
            { id: 'star', countId: 'starcOUNT', name: 'Stars', cost: 600, costIncrease: 300, production: 60 },
            { id: 'factory', countId: 'factorycount', name: 'Nebulas', cost: 1000, costIncrease: 500, production: 100 },
            { id: 'Galaxies', countId: 'Galaxiescount', name: 'Galaxies', cost: 6000, costIncrease: 1200, production: 400 },
            { id: 'Black holes', countId: 'Black holescount', name: 'Black Holes', cost: 15000, costIncrease: 2600, production: 1000 },
            { id: 'Galaxy Clusters', countId: 'Galaxy Clusterscount', name: 'Galaxy Clusters', cost: 24000, costIncrease: 3000, production: 2000 },
            { id: 'Superclusters', countId: 'Superclusterscount', name: 'Superclusters', cost: 50000, costIncrease: 5000, production: 3000 },
            { id: 'The Observable Universe', countId: 'The Observable Universecount', name: 'The Observable Universe', cost: 100000, costIncrease: 10000, production: 5000 },
            { id: 'Multiverse', countId: 'Multiversecount', name: 'Multiverse', cost: 250000, costIncrease: 25000, production: 15000 }
        ];

        productionSettings.forEach(settings => {
            this.upgrades.push(new ProductionUpgrade(this, settings));
        });
    }

    clickForStardust() {
        this.stardust += this.cookiePerClick;
        this.renderStardust();
    }

    collectProduction() {
        const production = this.upgrades
            .filter(upgrade => upgrade instanceof ProductionUpgrade)
            .reduce((total, upgrade) => total + upgrade.produce(), 0);

        this.stardust += production;
        this.renderStardust();
    }

    renderStardust() {
        this.cookieCount.textContent = this.stardust;
    }
}

new Game();

