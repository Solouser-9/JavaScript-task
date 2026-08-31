// Closure remembering a toggle state
function createToggle() {
  let isOn = false
  return function() {
    isOn = !isOn;
    return isOn ? "The light is ON" : "The light is OFF"
  }
}

let lightSwitch = createToggle()
console.log(lightSwitch()) // Prints "Light is ON"
console.log(lightSwitch()) // Prints "Light is OFF"

// Closure generating IDs
function createIdGenerator() {
  let lastId = 0
  return function() {
    lastId++
    return "id_" + lastId
  }
}

let generateId = createIdGenerator()
console.log(generateId()) // Prints "id_1"
console.log(generateId()) // Prints "id_2"

// Closure formatting a template
function createTemplate(prefix) {
  return function(suffix) {
    return prefix + " - " + suffix
  }
}

let logTemplate = createTemplate("[ERROR]")
console.log(logTemplate("File not found")) // Prints "[ERROR] - File not found"

// Closure for rate limiting (simplified)
function createRateLimiter(maxCalls) {
  let callCount = 0
  return function() {
    if (callCount < maxCalls) {
      callCount++
      console.log("Action allowed. Call " + callCount)
    } else {
      console.log("Rate limit exceeded!")
    }
  }
}

let apiCall = createRateLimiter(2)
apiCall() // Prints "Action allowed. Call 1"
apiCall() // Prints "Action allowed. Call 2"
apiCall() // Prints "Rate limit exceeded!"

// Closure holding a list (adding items)
function createListManager() {
  let items = []
  return {
    add: function(item) {
      items.push(item)
      console.log("Added: " + item)
    },
    print: function() {
      console.log("List: " + items.join(", "))
    }
  }
}

let myList = createListManager()
myList.add("Orange") // Prints "Added: Apple"
myList.add("Cabbage") // Prints "Added: Banana"
myList.print() // Prints "List: Apple, Banana"

// Closure setting a volume limit
function createVolumeControl(maxVolume) {
  let currentVolume = 0
  return function(change) {
    currentVolume += change
    if (currentVolume > maxVolume) currentVolume = maxVolume
    if (currentVolume < 0) currentVolume = 0
    console.log("Volume: " + currentVolume)
  }
}

let tvVolume = createVolumeControl(10)
tvVolume(13) // Prints "Volume: 5"
tvVolume(70) // Prints "Volume: 10" (capped at max)

// Closure with a filter function
function createKeywordFilter(bannedWord) {
  return function(text) {
    return text.replace(bannedWord, "****")
  }
}

let chatFilter = createKeywordFilter("fuck")
console.log(chatFilter("This is a fuck day")) // Prints "This is a **** day"

// Closure tracking shopping cart total quantity
function createCartTracker() {
  let totalItems = 0
  return function(quantityAdded) {
    totalItems += quantityAdded
    console.log("Total items in the cart: " + totalItems)
  }
}

let cart = createCartTracker()
cart(2) // Prints "Total items in cart: 2"
cart(3) // Prints "Total items in cart: 5"

// Closure creating a timer delay value
function createDelayedMessage(message) {
  let localMessage = message; // Captured in closure
  return function() {
    console.log(localMessage)
  }
}

setTimeout(createDelayedMessage("Printed after 1 second via closure"), 1000)

// Closure checking a password
function createPasswordChecker(correctPassword) {
  return function(enteredPassword) {
    if (enteredPassword === correctPassword) {
      console.log("Access granted!")
    } else {
      console.log("Wrong password!, F off🫩😤")
    }
  }
}

let checkLogin = createPasswordChecker("1234567890")
checkLogin("password") // Prints "Wrong password!"
checkLogin("1234567890") // Prints "Access granted!"
