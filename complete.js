// Part 1: Humble Beginnings (Using Class)

// Define the Character class
class Character {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Create the main character Robin
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];

// Create the companion Leo
robin.companion = new Character("Leo");
robin.companion.type = "Cat";

// Create the companion's companion Frank
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Loop to log each item in Robin's inventory
robin.inventory.forEach(item => console.log(item));

// Test the roll method for Robin
robin.roll();
robin.roll();

// Test the roll method for Leo
robin.companion.roll();

// Test the roll method for Frank
robin.companion.companion.roll();

// Part 2: Class Fantasy

// Create a class Adventurer extending Character
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, role) {
        super(name);
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Choose one of: ${Adventurer.ROLES.join(", ")}`);
        }
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    duel(opponent) {
        console.log(`${this.name} is dueling with ${opponent.name}...`);
        while (this.health > 50 && opponent.health > 50) {
            const thisRoll = Math.floor(Math.random() * 20) + 1;
            const opponentRoll = Math.floor(Math.random() * 20) + 1;
            if (thisRoll > opponentRoll) {
                opponent.health -= 1;
            } else if (thisRoll < opponentRoll) {
                this.health -= 1;
            }
            console.log(`${this.name} rolled ${thisRoll}, ${opponent.name} rolled ${opponentRoll}.`);
            console.log(`${this.name} health: ${this.health}, ${opponent.name} health: ${opponent.health}`);
        }
        if (this.health > 50) {
            console.log(`${this.name} wins the duel!`);
        } else {
            console.log(`${opponent.name} wins the duel!`);
        }
    }
}

// Create a class Companion extending Character
class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}

// Recreate Robin and companions using new classes
const adventurerRobin = new Adventurer("Robin", "Fighter");
adventurerRobin.inventory = ["sword", "potion", "artifact"];

adventurerRobin.companion = new Companion("Leo", "Cat");

adventurerRobin.companion.companion = new Companion("Frank", "Flea");
adventurerRobin.companion.companion.inventory = ["small hat", "sunglasses"];

// Test the new setup
adventurerRobin.inventory.forEach(item => console.log(item));
adventurerRobin.roll();
adventurerRobin.scout();
adventurerRobin.companion.roll();
adventurerRobin.companion.companion.roll();

// Part 5 
class AdventurerFactory {
    constructor(role) {
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Choose one of: ${Adventurer.ROLES.join(", ")}`);
        }
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find(a => a.name === name);
    }
}

const healerFactory = new AdventurerFactory("Healer");
const healerRobin = healerFactory.generate("Robin");

// Part 6: Adding more methods (duel already added in the Adventurer class)
// Create additional adventurers for dueling
const fighterFactory = new AdventurerFactory("Fighter");
const wizardFactory = new AdventurerFactory("Wizard");

// Generate adventurers (using factory methods to retrieve them)
fighterFactory.generate("Fighter1");
healerFactory.generate("Healer1");
wizardFactory.generate("Wizard1");

const fighter1 = fighterFactory.findByName("Fighter1");
const healer1 = healerFactory.findByName("Healer1");
const wizard1 = wizardFactory.findByName("Wizard1");

// Fighter duels with Healer
fighter1.duel(healer1);

// Healer duels with Wizard
healer1.duel(wizard1);

// Wizard duels with Fighter
wizard1.duel(fighter1);
