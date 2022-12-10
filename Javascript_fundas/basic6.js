//object is a collection of properties

let person = {
    firstName: 'Tim',
    lastName: 'Joe',
    age: 24,
    //adding a function as a value to be a property key value of the object
    fullName: function ()
    {
        console.log(this.firstName + this.lastName)
    }

}

console.log(person.fullName())

console.log(person.lastName)
console.log(person['lastName'])

person.firstName = 'Tim Dane'

console.log(person.firstName)
person.gender = 'male'
console.log(person)

delete person.gender
console.log(person)


//check if a property exist in an object
console.log('gender' in person)


// how to print all the values of the javascript object
for (let key in person)
{
    console.log(person[key])
}