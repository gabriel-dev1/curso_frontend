function Character(name, health, power) {
    this.name = name
    this.health = health
    this.power = power

    this.damage = function() {
        const damage = this.health - 5
        console.log(damage)
    }
}

function Wizard(name) {
    Character.call(this, name, 150 , 100)
}

function Hunter(name) {
    Character.call(this, name, 100, 80)
}

const character1 = new Hunter('roger')
const character2 = new Hunter('Maria')
const character3 = new Wizard('Joao')

console.log(character1)
console.log(character2)
console.log(character3)

console.log(character1 instanceof Hunter)
console.log(character2 instanceof Hunter)
console.log(character3 instanceof Wizard)

character3.damage()