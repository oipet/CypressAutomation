var marks = Array(6)

var marks = new Array(20, 40, 35, 12, 37, 100)

var marks = [20, 40, 35, 12, 37, 100]
submarks = marks.slice(2, 5)
console.log(submarks)

console.log(marks[2]) //35

marks[3] = 14
console.log(marks) // [20, 14, 35, 14, 37, 100]

console.log(marks.length) // 66

marks.push(65)
console.log(marks) // [20, 14, 35, 14, 37, 100,65]


marks.pop()
console.log(marks) // [20, 14, 35, 14, 37, 100]

marks.unshift(12) // [12,20, 14, 35, 14, 37, 100]
console.log(marks)



console.log(marks.indexOf(100))


//120 is present or not in the array

console.log(marks.includes(120))

var sum = 0 

for (let i = 0; i < marks.length; i++)
{

	console.log(marks[i])
	sum = sum + marks[i]
}

console.log(sum)



//reduce filter map methods

let total  = marks.reduce((sum, mark) => sum + mark, 0)
console.log(total)

var scores = [12, 13, 14, 16]
//create a new array with even numbers only of scores array
var evenScores = []
for (let i = 0; i < scores.length; i++) {

	if (scores[i] % 2 == 0) {
		evenScores.push(scores[i])
	}
	
}
console.log(evenScores)

let newFilterEvenScores = scores.filter(score => score%2==0)
console.log(newFilterEvenScores) //[ 12, 14, 16 ]

//map

//create a new array with even numbers only of scores array and multiple with 3 [ 12, 14, 16 ] => 36,42,,48

let mappedArray =  newFilterEvenScores.map(score => score*3)
console.log(mappedArray)


let totalmappedArray = mappedArray.reduce((sum, val) => sum + val, 0)
console.log(totalmappedArray)



var scores1 = [12, 13, 14, 16]

let sumValues = scores1.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, value) => sum + value, 0)
console.log(sumValues)



//sorting
let fruits = ["bannana", "bango", "pomegrante", "apple"]

console.log(fruits.sort())
console.log(fruits.reverse())

var scores1 = [12,003, 13, 19, 16, 14]
console.log(scores1.sort())
//buble sort algorithn to find the difference between numbers to recursevly check each ellement to sort them by the least sort difference
scores1.sort(function (a, b)
{
	return a-b
}
)

// or you can write the function as that anonymous function
console.log(scores1.sort((a,b)=>a-b))
//reversing numbers sort
console.log(scores1.sort((a, b) => b-a))








