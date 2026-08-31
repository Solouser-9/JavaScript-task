// Now for the fun part. Let's start grabbing the tools we left in exporting_file_1.js
// Notice we use the relative path "./" to point to the file in the same folder.

// Importing a boolean and using it in an if-statement
import { isMaintenanceMode } from "./exportingFile.js"
if (isMaintenanceMode) {
  console.log("Sorry, the site is down for maintenance.")
} else {
  console.log("Site is up and running!")
}

// Importing a config object
import { databaseConfig } from "./exportingFile.js"
// Let's pretend to connect using the imported settings
console.log(`Connecting to database at ${databaseConfig.host}:${databaseConfig.port}`)

// Importing and using a math utility
import { calculateCircleArea } from "./exportingFile.js"
let area = calculateCircleArea(5)
console.log("The area of a circle with radius 5 is: " + area.toFixed(2))

// Importing mock data (array of objects)
import { initialEmployees } from "./exportingFile.js"
// Looping through the imported array of objects to print names
initialEmployees.forEach(employee => {
  console.log(`Employee: ${employee.name} - Role: ${employee.role}`)
})

// Importing a class and calling its method
import { Car } from "./exportingFile.js"
let myCar = new Car("Bughatti")
myCar.accelerate(300) // Should print "Bughatti is going 300 mph"

// Importing a renamed export (aliasing on import)
// Remember we exported 'internalSecret' as 'apiKey'. So we must import it as 'apiKey'.
import { apiKey } from "./exportingFile.js"
console.log("The secret API key is: " + apiKey)

// Importing a function that returns a Promise and handling it with .then()
import { fetchUserData } from "./exportingFile.js"
console.log("Fetching user data...")
fetchUserData().then(data => {
  // This runs after the 1-second delay we set up in the export file
  console.log("Got user data:", data)
})

// Importing an async function and using 'await' 
// Note: To use 'await' at the top level like this, you must be in a module (which we are!)
import { processPayment } from "./exportingFile.js"
// It is wrapped in an async function just to be safe with older environments
async function checkout() {
  let result = await processPayment(50)
  console.log("Checkout result: " + result)
}
checkout()

// Importing the Default Export (a class this time)
import Logger from "./exportingFile.js" // No curly braces for default
let myLogger = new Logger() // Creating an instance of the default class
myLogger.log("This is a test log message.")

// Importing multiple small helpers at once and using them
import { formatCurrency, formatPercentage } from "./exportingFile.js"
let price = formatCurrency(100.00)      // Returns "$19.99"
let tax = formatPercentage(0.0825)     // Returns "8.3%"
console.log(`Price: ${price} (Tax: ${tax})`)
