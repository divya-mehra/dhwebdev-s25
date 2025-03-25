// ###
// From the "04_dynamically_adding_content"
// Everything in this is the same, except the "data-attribute"
// Read through for notes
// ###

const books = [
  {
    title: "I Who Have Never Known Men",
    author: "Jacqueline Harpman",
    yearCreated: 1995,
    genre: "Fiction",
  },
  {
    title: "Lincoln in the Bardo",
    author: "George Saunders",
    yearCreated: 2017,
    genre: "Fiction",
  },
  {
    title: "Identity and Violence",
    author: "Amartya Sen",
    yearCreated: 2006,
    genre: "Nonfiction",
  },
  {
    title: "Martyr!",
    author: "Kaveh Akbar",
    yearCreated: 2024,
    genre: "Fiction",
  },
  {
    title: "The Moustache",
    author: "Emmanuel Carrère",
    yearCreated: 1986,
    genre: "Fiction",
  },
  {
    title: "The Memory Police",
    author: "Yoko Ogawa",
    yearCreated: 1994,
    genre: "Fiction",
  },
  {
    title: "Evicted",
    author: "Matthew Desmond",
    yearCreated: 2016,
    genre: "Nonfiction",
  },
  {
    title: "Say Nothing",
    author: "Patrick Radden Keefe",
    yearCreated: 2019,
    genre: "Nonfiction",
  },
  {
    title: "Ugly Feelings",
    author: "Sianne Ngai",
    yearCreated: 2005,
    genre: "Nonfiction",
  },
  {
    title: "The Story and the Situation",
    author: "Vivian Gornick",
    yearCreated: 1992,
    genre: "Nonfiction",
  },
  {
    title: "Live or Die",
    author: "Anne Sexton",
    yearCreated: 1966,
    genre: "Poetry",
  },
  {
    title: "Speak, Memory",
    author: "Vladimir Nabokov",
    yearCreated: 1951,
    genre: "Nonfiction",
  },
];

let wrapper = document.querySelector(".wrapper");

let renderBooks = (data) => {
  data.forEach((book) => {
    let newDiv = document.createElement("div");
    // Data Attributes
    // As we're creating divs from the data, we're also adding a "data attribute"
    // Data attribute does not affect the styling of an element, but it can attach a piece of data so you can reference it later.
    // All data attributes start with data-
    // You'll use setAttribute("data-", dataToAttach)
    newDiv.setAttribute("data-genre", book.genre);
    newDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
    wrapper.append(newDiv);
  });
};

renderBooks(books);

const genres = ["Fiction", "Nonfiction", "Poetry"];

let selection = document.querySelector("select");

genres.forEach((genre) => {
  let option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  selection.appendChild(option);
});

// ###
// This is where the new stuff starts.
// ###

// We define function to change the data when the dropdown value changes. 
// The function takes the value of what the site visitor has clicked on (see the paramenter, e?) and assigns this value to the variable "selected"
// Then we select all of the existing grid items in our wrapper and assign it to variable "bookDivs"
// We iterate through all of the divs with forEach and check if what the visitor has selected matches the data-genre attribute we assigned the div.

// If it DOES match, we keep the div with display = block
// If it does not match, we change display = none, so the grid item will disappear!

let changeData = (e) => {
  let selected = e.target.value;
  let bookDivs = document.querySelectorAll(".wrapper div");

  bookDivs.forEach((book) => {
    if (
      selected === "All Genres" ||
      book.getAttribute("data-genre") === selected
    ) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
};

selection.addEventListener("change", (e) => changeData(e));
