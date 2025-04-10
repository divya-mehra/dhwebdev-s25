// ###
// (01) Selecting & modifying the DOM
// ###

document.querySelector('.wrapper');
document.getElementById('#games');

// For multiple elements:
document.querySelectorAll('.filter');
document.getElementsByClassName('filter');

// ###
// (02) Assigning elements to variables
// ###

// We can assign this to a variable
let wrapper = document.querySelector('.wrapper');

// Or you can use const, if you don't plan on reassigning.
const games = document.getElementById('games');

// ###
// (03) Changing the element via its properties, e.g. style, textContent, etc. 
// ###

// Here's how you would change the style for the selected elements
games.style.backgroundColor = "black";
games.style.color = "white";

// ###
// (04) Using forEach to iterate through an array
// ###

// Here's how you might select a group of elements (with the same selector) 
// And then change the style for all of them using the "forEach" method which takes an anonymous function
let filters = document.querySelectorAll('.filter');

// An anonymous function means it has bot been defined. Note how it's the function notation within the forEach method parentheses.
filters.forEach((btn) => {btn.style.color = "red"})

// If you only have one parameter, you can leave out the parentheses.
// And if you only have one expression in your function, you can leave our the curly braces.
// The below is the same as what's above.
filters.forEach(btn =>  btn.style.color = "red")

// Remember the notation for functions and practice it:
// variable = (parameters) => {instructions}

// You can toggle classes too! This is helpful for making big changes at once.
filters.forEach(f => f.classList.toggle("active"));

// Note that:
// toggle is a method so you "call" it. That's why you see parentheses. It acts like a function.  
// style.color is a property so you assign it
// There are many more properties and methods you can attach to an HTML object

// ###
// (05) Dynamically adding content with createElement and loops
// ###

for(let i = 0; i < 12; i++) { 
    let newDiv = document.createElement('div');   
    wrapper.append(newDiv);
}