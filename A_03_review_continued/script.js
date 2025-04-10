// ###
// From the "02_review"
// ###

let wrapper = document.querySelector(".wrapper");
let games = document.getElementById("games");
let filters = document.querySelectorAll('.filter');

for (let i = 0; i < 12; i++) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = "<h2>Hi</h2>";
  wrapper.append(newDiv);
}

// ###
// (06) Arrow Functions & Event Listeners
// ###

// If you want the "games" element to turn red when you click on it, here's a basic example broken out.
// This is a function to change the color, that takes "e" which stands in for our event:
let changeColor = (e) => {
  e.target.style.color = "red";
};
// This is our event listener, which takes the type of event as its first argument, and the function to execute as its second argument.
games.addEventListener("click", changeColor);

// Instead of adding it just to "games", we would use forEach to add it to multiple elements. 
// Like elements with the class .filter (already assigned to variable "filters") in this case:
filters.forEach((btn) => btn.addEventListener("click", changeColor));

// Since the function is so short in this case (and if you're not using it anywhere else), you can add it directly to the second argument as an anonymous function. 
filters.forEach((btn) =>
  btn.addEventListener("click", (e) => (e.target.style.color = "red"))
);

// ###
// (07) Ternary Operators, aka Conditional Shorthands
// ###

// You can use shorthand conditionals for quick expressions. Add the conditional statement to check, and then the instructions for true or false evaluations. 
// (condition) ? if true, do this : if false, do this
filters.forEach(btn => btn.addEventListener("click", (e) =>  e.target.style.color === "red" ? e.target.style.color = "black" : e.target.style.color = "red" ))

// You could also simply add the color "red" to class .active, and if your default is black, instruct the event listener function to toggle the class. 
filters.forEach((btn) =>
  btn.addEventListener("click", (e) => e.target.classList.toggle("active"))
);
