let day = "tuesday "
console.log(day.length) //8
console.log(subDay = day.slice(0, 4))
console.log(day[1])
//tue  day
let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote = day + "is Funday"
console.log(newQuote)
let val = newQuote.indexOf("day", 5)
console.log(val)