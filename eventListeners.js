// Mouse move event (tracking X and Y coordinates)
// HTML: <div id="drawingArea" style="height:200px; width:200px; background:gray;"></div>
let drawArea = document.getElementById("drawingArea")
drawArea.addEventListener("mousemove", function(event) {
  console.log("X: " + event.offsetX + ", Y: " + event.offsetY)
})

// Focus event (when an input is clicked into)
// HTML: <input id="focusInput" type="text">
let focusInput = document.getElementById("focusInput")
focusInput.addEventListener("focus", function() {
  focusInput.style.backgroundColor = "lightyellow"
})

// Blur event (when an input is clicked out of)
focusInput.addEventListener("blur", function() {
  focusInput.style.backgroundColor = "white" // Resets background color
})

// Event Bubbling (clicking a child triggers the parent's listener too)
// HTML: <div id="parentDiv"><button id="childBtn">Child</button></div>
let parentDiv = document.getElementById("parentDiv")
let childBtn = document.getElementById("childBtn")

parentDiv.addEventListener("click", function() {
  console.log("Parent clicked!")
})
childBtn.addEventListener("click", function() {
  console.log("Child clicked!")
})
// Clicking the button prints BOTH "Child clicked!" and "Parent clicked!"

// Stopping Event Bubbling
childBtn.addEventListener("click", function(event) {
  event.stopPropagation() // Stops the event from going up to the parent
  console.log("Child clicked, parent will NOT trigger!")
})

// Copy event (when user copies text)
// HTML: <p id="copyText">Try to copy this text.</p>
let copyText = document.getElementById("copyText")
copyText.addEventListener("copy", function() {
  console.log("User copied the text!")
})

// Scroll event on the window
window.addEventListener("scroll", function() {
  console.log("User scrolled to: " + window.scrollY)
})

// Removing an event listener
// HTML: <button id="removeBtn">Click Once</button>
let removeBtn = document.getElementById("removeBtn")

function clickOnceHandler() {
  console.log("I only work once!")
  removeBtn.removeEventListener("click", clickOnceHandler) // Removes itself
}

removeBtn.addEventListener("click", clickOnceHandler)

// Checkbox change event
// HTML: <input type="checkbox" id="myCheckbox">
let myCheckbox = document.getElementById("myCheckbox")
myCheckbox.addEventListener("change", function() {
  if (myCheckbox.checked) {
    console.log("Checkbox is checked!")
  } else {
    console.log("Checkbox is unchecked!")
  }
})

// Context menu event (Right-click)
// HTML: <div id="rightClickBox">Right click me</div>
let rightClickBox = document.getElementById("rightClickBox")
rightClickBox.addEventListener("contextmenu", function(event) {
  event.preventDefault() // Stops the default browser right-click menu
  console.log("Right clicked! Custom menu would open here.")
})