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


