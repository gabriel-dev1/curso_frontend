class Character {
   constructor(name, health,power) {
       this.name = name 
       this.health = health
       this.power = power

       this.damage = function() {
          const damage = this.health - 5
          console.log(damage)
       }
   }
}

class Wizard extends Character {
    constructor(name) {
       super(name, 100 , 40)
    }
}

class Hunter extends Character {
    constructor(name) {
        super(name, 100, 45)
    }
}

const character1 = new Wizard('roger')
const character2 = new Hunter('Maria')
const character3 = new Wizard('Joao')

console.log(character1)
console.log(character2)
console.log(character3)

character1.damage()