const Person = require('./basic7.js')

let day = 'tuesday '

console.log(day.length) //8 count the space included
let subDay = day.slice(0, 4)
console.log(subDay) // tues

console.log(day[1]) // u

//split the day tue and day
let splitDay = day.split("s")

console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

console.log(splitDay[1].trim())


let date = '23'
let nextdate = '27'
//how to convert string to integer
let diff = parseInt(nextdate) - parseInt(date)
console.log(diff)

//how to convert number to string
let diffToString = diff.toString()
console.log(diffToString)


//concatenate strings
let newQuote = day+"is Funday"

console.log(newQuote)


let val = newQuote.indexOf("day",5)
console.log(val)
//tuesday is Funday
let count = 0
let value = newQuote.indexOf("day")
while (value!== -1)
{
    count++//2
    value = newQuote.indexOf("day", value +1)
}
console.log(count)


let person = new Person("Chris", "Edward")
person.fullName()