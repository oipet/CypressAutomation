//inherit class

const Person = require("./basic7");

class Pet extends Person

{
    get location() {
        return "BlueCross"
    }


    constructor(fistName, lastName) {
        //call the parent class constractor
        super(fistName, lastName)

    }



}
//object creation to reuse fullName from parent class
let pet = new Pet("sam", "san")
pet.fullName()
console.log(pet.location)
