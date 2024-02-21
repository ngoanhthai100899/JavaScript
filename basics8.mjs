//Inheritance is the Main Pillar in Object Oriented Programming
//One class can inherit/acquire the properties, methods of another class
//The class which inherits the properties of other is known as sub-class (derived class, child class)
//The class whose properties are inherited is known as superclass
import { Person } from './basics7.mjs'
class Pet extends Person {
    get location() {
        return "BlueCross"
    }
    constructor(firstName, lastName) {
        //call parent class constructor
        super(firstName, lastName)
    }

}
let pet = new Pet("sam", "san")
console.log(pet.fullName())
console.log(pet.location)