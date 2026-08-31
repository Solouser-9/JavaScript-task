// Ternary returning a math operation
let hasDiscount = true
let price = 100
let finalPrice = hasDiscount ? price - 20 : price
console.log(finalPrice); // Prints 80

// Nested ternary
let score = 75
let grade = score >= 90 ? "A" : (score >= 80 ? "B" : "C")
console.log(grade) // Prints "C"

// Checking string length
let tweet = "Hello world"
let tweetStatus = tweet.length > 10 ? "Too long" : "Fits fine"
console.log(tweetStatus) // Prints "Too long"

// Ternary based on a string match
let color = "red"
let stopOrGo = color === "green" ? "Go" : "Stop"
console.log(stopOrGo) // Prints "Stop"

// Using ternary to decide what function to call
let mode = "silent"
// We won't actually call the functions here, just show how it picks one
let actionToTake = mode === "silent" ? () => console.log("...") : () => console.log("Beep!")
actionToTake() // Calls the first function, prints "..."

// Checking if a variable is null or undefined
let dataFromServer = null
let displayData = (dataFromServer !== null && dataFromServer !== undefined) ? dataFromServer : "No data"
console.log(displayData) // Prints "No data"

// Ternary to toggle a boolean
let isActive = true
isActive = !isActive ? true : false
console.log(isActive) // Prints true (it was false, so it becomes true)

// Checking the time of day (simplified)
let hour = 14 // 2 PM
let greeting = hour < 12 ? "Good morning" : "Good afternoon"
console.log(greeting) // Prints "Good afternoon"

// Short circuiting with ternary to avoid errors
let maybeObject = undefined
let objectValue = maybeObject ? maybeObject.value : "Default"
console.log(objectValue) // Prints "Default" (avoids throwing an error for reading undefined)

// Ternary without assigning to a variable (just running code)
let needCoffee = true
needCoffee ? console.log("Brewing coffee...") : console.log("Going back to sleep")
// Prints "Brewing coffee..."