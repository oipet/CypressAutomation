//block of code
//var - global level / or functional level
//let - global level / or block level {} -- can be re-initialized
//const - cannot be re-initialized - everything else same as let

const greet = "Evening"
//greet = "night"


if (1 == 1) {
    let greet = "Afternoon"
}



function add(a,b)
{
    let greet = "Morning"
    return a + b
}


let sum = add(2,3)

console.log(sum)
console.log(greet)
//do not have name  -- anonymous functions - Function expressions

let sumOfIntegers = function(c, d) {
    return c+d
}

//fat bite
let sumOfNumbers = (c, d) => c + d

console.log(sumOfNumbers(2, 3))








