// Ternary returning a math operation
let hasDiscount = true
let price = 100
let finalPrice = hasDiscount ? price - 20 : price
console.log(finalPrice); // Prints 80

// Nested ternary
let score = 86
let grade = score >= 90 ? "A" : (score >= 80 ? "B" : "C")
console.log(grade) // Prints "B"

// Checking string length
let tweet = "Hello world"
let tweetStatus = tweet.length > 10 ? "The text is too long" : "Fits fine"
console.log(tweetStatus) // Prints "The text is too long"

// Ternary based on a string match
let color = "red"
let stopOrGo = color === "green" ? "Go" : "Stop"
console.log(stopOrGo) // Prints "Stop"

// Using ternary to decide what function to call
let mode = "silent"
let actionToTake = mode === "silent" ? () => console.log("...") : () => console.log("Beep!")
actionToTake() // Calls the first function, prints "..."

// Checking if a variable is null or undefined
let dataFromServer = null
let displayData = (dataFromServer !== null && dataFromServer !== undefined) ? dataFromServer : "No data was found"
console.log(displayData) // Prints "No data was found"

// Ternary to toggle a boolean
let isActive = true
isActive = !isActive ? true : false
console.log(isActive) // Prints true (it was false, so it becomes true)

// Checking the time of day (simplified)
let hour = 14 // 2 PM
let greeting = hour < 12 ? "Hello, Good morning" : "Hello, Good afternoon"
console.log(greeting) // Prints "Hello, Good afternoon"

// Short circuiting with ternary to avoid errors
let maybeObject = undefined
let objectValue = maybeObject ? maybeObject.value : "Default"
console.log(objectValue) // Prints "Default" (avoids throwing an error for reading undefined)

// Ternary without assigning to a variable (just running code)
let isTired = true
isTired ? console.log("Go and rest") : console.log("Continue your work out")
// Prints "Go and rest"
