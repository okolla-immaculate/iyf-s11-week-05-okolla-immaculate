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