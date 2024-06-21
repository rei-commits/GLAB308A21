// Part 1
//create adventure object
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["swords", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod
        console.log(`${this.name} rolled a ${result}.`)
    }
}
// test the roll
adventurer.roll(5)
adventurer.roll(13)

//log details
console.log(adventurer.companion.name)
console.log(adventurer.companion.type)
console.log(adventurer.companion.companion.belongings)
// loop so it can log each item in the inventory
adventurer.inventory.forEach(item => console.log(item))


// Part 2
// Define the Character class
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Create main character
const robin = new Character("Robin")
robin.inventory = ["sword", "potion", "artifact"]

//Next companion
robin.companion = new Character("Leo")
robin.companion.type = "Cat"

//Companion for Leo
robin.companion.companion = new Character("Frank")
robin.companion.companion.type = "Flea"
robin.companion.companion.inventory = ["small hat", "sunglasses"]

//Loop each item in robs inventory
robin.inventory.forEach(item => console.log(item))

//Test the roll method for rob
robin.roll(5)

//Test for Leo
robin.companion.roll(13)

//Test for Frank
robin.companion.companion.roll(7)

//Part 3
// Creating the adventure Class
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins")
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`)
        super.roll()
    }
}

// create companion class
class Companion extends Character {
    constructor(name, type) {
        super(name)
        this.type = type
    }
}

// Now create the main character and the companions
const robin = new Adventurer("Robin", "Fighter")
robin.inventory = ["sword", "potion", "artifact"]

robin.companion = new Character("Leo", "cat")

robin.companion.companion = new Character("Frank", "Flea")
robin.companion.companion.inventory = ["small hat", "sunglasses"]

// Test using methods
robin.inventory.forEach(item => console.log(item))

robin.roll()
robin.scout()
robin.companion.roll()
robin.companion.companion.roll()