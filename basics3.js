var marks = Array(6)
var marks = new Array(20, 40, 35, 12, 37, 100)

var marks = [20, 40, 35, 12, 37, 100]
subMarks = marks.slice(2, 5)
console.log(subMarks)
console.log(marks[2])
marks[3] = 14
console.log(marks)
console.log(marks.length)
marks.push(65)
console.log(marks)
marks.pop()
console.log(marks)
marks.unshift(12)
console.log(marks)
console.log(marks.indexOf(100))
console.log(marks.includes(120))
var sum = 0
for (let i = 0; i < marks.length; i++) {
    // console.log(marks[i])
    sum = sum + marks[i]
}
console.log(sum)
//reduce filter map
let total = marks.reduce((sum, mark) => sum + mark, 0)
console.log(total)
var scores = [12, 13, 14, 16]
//create new array with even numbers of scores array
var evenScores = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)
let newFilterEvenScores = scores.filter(score => score % 2 == 0)
console.log(newFilterEvenScores)

//map
////create new array with even numbers and multiply each number with 3 of scores array
let mappedArray = newFilterEvenScores.map(score => score * 3)
console.log(mappedArray)
let sumArray = mappedArray.reduce((sum, mark) => sum + mark, 0)
console.log(sumArray)

var scores1 = [12, 13, 14, 16]
let sumValues = scores1.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, mark) => sum + mark, 0)
console.log(sumValues)

let fruits = ["banana", "mango", "pomegrante", "apple"]
console.log(fruits.sort())
console.log(fruits.reverse())

var scores2 = [12, 0o3, 19, 16, 14] //9
// console.log(scores2.sort())
console.log(scores2.sort((a, b) => a - b))