// Chaining callbacks (Callback Hell / Pyramid of Doom)
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 done")
    callback()
  }, 1000)
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 done")
    callback()
  }, 1000)
}

// Running them in order
step1(function() {
  step2(function() {
    console.log("All steps complete!")
  })
})

// Callback to find a specific item in an array
let users = [{name: "Destiny"}, {name: "Adnan"}]
function findUser(name, callback) {
  let found = users.find(u => u.name === name)
  if (found) {
    callback(null, found)
  } else {
    callback("User not found", null)
  }
}

findUser("Jerry", (err, user) => {
  if (!err) console.log("Found: " + user.name) // Prints "Found: Adnan"
})

// Callback for a simple DOM event
// (Assuming HTML: <button id="myBtn">Click</button>)
let btn = document.getElementById("myBtn")
btn.addEventListener("click", function() {
  console.log("You clicked this burron") // This function is a callback
})

// Using reduce with a callback to sum an array
let cartPrices = [10, 20, 5]
let total = cartPrices.reduce(function(accumulator, currentPrice) {
  return accumulator + currentPrice
}, 0) // 0 is the starting value
console.log(total) // Prints 35

// Callback that modifies a string
function processString(text, callback) {
  let uppercased = text.toUpperCase()
  callback(uppercased)
}

processString("hello", function(result) {
  console.log("Processed: " + result) // Prints "Processed: HELLO"
})

// Callback running a check before proceeding
function withdrawMoney(amount, checkBalanceCallback) {
  let sufficientFunds = checkBalanceCallback(amount)
  if (sufficientFunds) {
    console.log("Dispensing $" + amount)
  } else {
    console.log("You're broke 😭✌️")
  }
}

withdrawMoney(50, function(amount) {
  let balance = 100
  return balance >= amount // Returns true or false
})

// Array.some (checks if AT LEAST ONE item passes the callback test)
let mixedNumbers = [1, 3, 5, 8]
let hasEvenNumber = mixedNumbers.some(function(num) {
  return num % 2 === 0
});
console.log(hasEvenNumber) // Prints true (because of 8)

// Array.every (checks if ALL items pass the callback test)
let allPositive = [1, 5, 10].every(function(num) {
  return num > 0
});
console.log(allPositive) // Prints true

// Custom timeout callback function
function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000)
}

runAfterDelay(3, () => {
  console.log("Ran after 3 seconds") // Prints after 3 seconds
})

// Passing arguments through a callback wrapper
function multiplyByTwo(n) {
  return n * 2
}

function processAndPrint(value, operationCallback) {
  let result = operationCallback(value)
  console.log("The result is " + result)
}

processAndPrint(10, multiplyByTwo) // Prints "The result is 20"
