// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice: Select these elements
// 1. The h1 element
const h1 = 
document.querySelector("h1");
console.log(h1);

// 2. All elements with class "content"
const contentElements = 
document.getElementsByClassName("content");
console.log(contentElements);

// 3. The form with id "contact-form"
const form = 
document.getElementById("contact-form");
console.log(form);

// 4. The email input
const emailInput = 
document.getElementById("email");
console.log(emailInput);

// 5. All list items in the nav
const navItems =
document.querySelectorAll(".nav-links li");
console.log(navItems);

// 6. The first .nav-link
const firstNavLink =
document.querySelector(".nav-link");
console.log(firstNavLink);

// 7. The last paragraph
const lastParagraph = 
document.querySelector("p:last-of-type");
console.log(lastParagraph);



//DOM navigation
const nav = document.querySelector("nav");
console.log(nav);

// Parent
const parentLi = firstNavLink.parentElement;
console.log(nav.parentElement);          // header

// Children
console.log(nav.children);               // HTMLCollection
console.log(nav.firstElementChild);      // ul
console.log(nav.lastElementChild);       // ul

// Siblings

const article = document.querySelector("article");
console.log(article.nextElementSibling);     // section
console.log(article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");  // all links inside nav

//Modifying content

// Reading text
console.log(h1.textContent);     // Includes hidden text
console.log(h1.innerText);       // Only visible text

// Modifying text
h1.textContent = "New Title";



// Reading HTML
console.log(article.innerHTML);

// Modifying HTML (careful with security!)
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Safer: textContent (escapes HTML)
const userInput = "<script>alert('hack!')</script>";
article.textContent = userInput;  // Displays as text, not executed


const link = document.querySelector(".nav-link");

// Get attribute
console.log(link.getAttribute("href"));
console.log(link.href);  // Property access

// Set attribute
link.setAttribute("href", "https://example.com");
link.href = "https://example.com";  // Same result

// Check attribute
console.log(link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes
// <element data-id="123" data-category="tech">
const element = document.querySelector("[data-id]");
console.log(element.dataset.id);        // "123"
console.log(element.dataset.category);  // "tech"
element.dataset.newAttr = "value";// Creates data-new-attr

      
const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles (use classes instead when possible!)
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

//Adding and removing elements.
// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
article.appendChild(newParagraph);  // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);  // Add before first p

// Modern insertion methods
article.prepend(newParagraph);         // First child
article.append(newParagraph);          // Last child
firstParagraph.before(newParagraph);   // Before sibling
firstParagraph.after(newParagraph);    // After sibling

// Remove an element
const footer = document.querySelector("footer");
footer.remove();

// Remove child
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

// Clear all children
article.innerHTML = "";  // Simple but rebuilds DOM
// OR
while (article.firstChild) {
    article.removeChild(article.firstChild);
}

const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

//Dynamically adding navigation
function addNavItem(text, href) {
    const navList = document.querySelector(".nav-list");
// Create li with a.nav-link inside
    const li = document.createElement("li");
    const link = document.createElement("a");

    link.textContent = text;
    link.href = href;
    link.classList.add("nav-link");
    
    li.appendChild(link);
    navList.appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");


//Event listeners
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);

// Mouse events
const input = document.querySelector("#email");

function handler(event) {
    console.log(event.type);
}

element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

// Keyboard events
input.addEventListener("keydown", handler);
input.addEventListener("keyup", handler);
input.addEventListener("keypress", handler);  // Deprecated

// Form events
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("input", handler);     // Real-time changes
input.addEventListener("change", handler);    // On blur after change

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);

// Create counter display
let count = 0;

const counter = document.createElement("h2");
counter.textContent = count;

// Create buttons
const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+";

const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "-";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

// Add elements to the page
document.body.appendChild(counter);
document.body.appendChild(increaseBtn);
document.body.appendChild(decreaseBtn);
document.body.appendChild(resetBtn);

// Increase count
increaseBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

// Decrease count (don't go below 0)
decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counter.textContent = count;
    }
});

// Reset count
resetBtn.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
});

//using event properties
document.addEventListener("click", function(event) {
    // The element that was clicked
    console.log("Target:", event.target);
    
    // The element the listener is attached to
    console.log("Current Target:", event.currentTarget);
    
    // Event type
    console.log("Type:", event.type);
    
    // Mouse position
    console.log("Position:", event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop propagation (bubbling)
    event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);       // "a", "Enter", "Escape"
    console.log("Code:", event.code);     // "KeyA", "Enter", "Escape"
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});


const inputs = document.querySelectorAll("input");

document.addEventListener("keydown", function (event) {

    // Ctrl + S
    if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault(); // Prevent browser Save dialog
        alert("Saved!");
    }

    // Escape
    if (event.key === "Escape") {
        inputs.forEach(input => {
            input.value = "";
        });
    }

    // Ctrl + Enter
    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        form.requestSubmit(); // Submit the form
    }

});

//Event bubbling and delegation
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Click on Child - what order do the logs appear?
// Answer: Child → Parent → Grandparent (bubbling up)


//Event delegation
// BAD: Adding listeners to each item
const items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
// Problem: New items won't have the listener!

// GOOD: Delegate to parent
document.querySelector("ul").addEventListener("click", function(event) {
    // Check if clicked element is an li
    if (event.target.matches("li")) {
        handleClick(event);
    }
    
    // Or check for a class
    if (event.target.classList.contains("item")) {
        handleClick(event);
    }
});

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();

    if (task === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${task}</span>
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
});

// ONE event listener on the parent <ul>
taskList.addEventListener("click", (event) => {

    // Delete task
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        return;
    }

    // Toggle completed class
    if (event.target.tagName === "SPAN") {
        event.target.classList.toggle("completed");
    }
});

//Form handling

const nameInput = document.getElementById("name");


// Real-time validation
nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop form from submitting
    
    // Get all form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log("Form data:", data);
    
    // Validate all fields
    if (isValid(data)) {
        // Submit via fetch or show success
        showSuccess("Form submitted successfully!");
        form.reset();
    }
});

function showError(input, message) {
    // Add error styling and message
    input.classList.add("error");
    // Create or update error message element
}

function clearError(input) {
    input.classList.remove("error");
    // Remove error message
}

