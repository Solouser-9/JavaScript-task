// I think of this file as a toolbox. We are putting tools in here that other files can borrow.

// Exporting a boolean flag
export const isMaintenanceMode = false

// 12. Exporting a configuration object
export const databaseConfig = {
  host: "localhost",
  port: 8080,
  username: "admin",
  password: "1234567890" 
}

// Exporting a math utility function
export function calculateCircleArea(radius) {
  return Math.PI * (radius * radius)
}

// Exporting an array of objects (like mock database data)
export const initialEmployees = [
  { id: 1, name: "Destiny", role: "Developer" },
  { id: 2, name: "Praise", role: "Designer" }
]

// Exporting a class with a method
export class Car {
  constructor(brand) {
    this.brand = brand
    this.speed = 0
  }
  accelerate(amount) {
    this.speed += amount
    console.log(`${this.brand} is going ${this.speed} kmph`)
  }
}

// Renaming an export (aliasing)
// Sometimes your internal variable name isn't what you want outsiders to use.
// We can rename it during export. 'internalSecret' becomes 'apiKey' to the outside world.
let internalSecret = "I am a boy"
export { internalSecret as apiKey }

// Exporting a function that returns a Promise (mocking an API call)
export function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Ajomale Isaac", age: 17 })
    }, 1000) // Simulates a 1-second network delay
  })
}

// Exporting an async function
export async function processPayment(amount) {
  // Just pretending to process a payment here
  let success = amount > 0
  return success ? "Payment Successful" : "Payment Failed"
}

// Another Default Export (for this file)
// This is the main thing we want people to grab from this specific file.
export default class Logger {
  log(message) {
    console.log(`[LOG]: ${message}`)
  }
}

// Exporting multiple small helper functions at the bottom
function formatCurrency(num) {
  return "$" + num.toFixed(2)
}
function formatPercentage(num) {
  return num.toFixed(1) + "%"
}
// Grouping them together in one export statement
export { formatCurrency, formatPercentage }
