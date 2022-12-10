//class explanation

module.exports = class Person
{
    age = 25
    //location = "Canada"
    get location()
    {
        return "Canada"
    }
    //constractor is a method which executes by default when you create object of the class
    //instanse values
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    //methods
    fullName() {
        console.log(this.firstName + this.lastName)
    }



}

//let person = new Person("Tim","Joseph")
//let person1 = new Person("Chris", "Jones")
//console.log(person.age)
//
//console.log(person.location)
//
//console.log(person.fullName())
//console.log(person1.fullName())
