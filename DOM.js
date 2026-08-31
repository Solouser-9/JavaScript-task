// Creating a brand new element from scratch
let newParagraph = document.createElement("p")
newParagraph.innerText = "I am a totally new paragraph!"

// Appending (adding) that new element to the body
// HTML: <body></body>
document.body.appendChild(newParagraph) // The new paragraph is now visible on the page

// Removing an element from the page
// HTML: <div id="deleteMe">Please delete this</div>
let elementToDelete = document.getElementById("deleteMe")
elementToDelete.remove() // The div vanishes from the screen

// Adding innerHTML (includes HTML tags, not just text)
// HTML: <div id="content"></div>
let contentDiv = document.getElementById("content")
contentDiv.innerHTML = "<h2>This is a heading</h2><p>And a paragraph.</p>"

// Getting text from an input field
// HTML: <input id="userInput" type="text" value="Hello World">
let inputField = document.getElementById("userInput")
let whatUserTyped = inputField.value
console.log(whatUserTyped) // Prints "Hello World"

// Toggling a class (add if it's not there, remove if it is)
// HTML: <button id="darkModeBtn">Dark Mode</button>
let darkBtn = document.getElementById("darkModeBtn")
darkBtn.classList.toggle("dark-theme") // If it has the class, removes it. If not, adds it.

// Finding a child element
// HTML: <div id="parent"><span id="child">Hi</span></div>
let parentDiv = document.getElementById("parent")
let childSpan = parentDiv.firstElementChild // Grabs the <span> inside the div
console.log(childSpan.id) // Prints "child"

// Finding a parent element
let myChildSpan = document.getElementById("child")
let myParentDiv = myChildSpan.parentElement // Climbs up the tree to grab the <div>
console.log(myParentDiv.id) // Prints "parent"

// Inserting an element before another
// HTML: <ul id="myList"><li>Second</li></ul>
let myList = document.getElementById("myList")
let firstItem = document.createElement("li")
firstItem.innerText = "First"
myList.insertBefore(firstItem, myList.firstElementChild) // Puts "First" before "Second"

// Cloning (copying) an element
// HTML: <p id="original">Copy me!</p>
let originalP = document.getElementById("original")
let cloneP = originalP.cloneNode(true) // 'true' means copy the text inside it too
document.body.appendChild(cloneP) // Now we have two identical paragraphs

// Toggles dark mode
darkBtn.addEventListener("click", function () {
    darkBtn.classList.toggle("dark-theme")
})