// Here's an array of objects with properties (or keys) and values
// Basically, nested data. 

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

// ###
// From the "03_review"
// ###

let wrapper = document.querySelector(".wrapper");

// ###
// Dynamically Rendering Data from Objects
// ###

// Option 1: 
// If we wanted to render the books just once, we could write out dynamically adding data from the object like so

books.forEach((book) => {
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
      wrapper.append(newDiv);
  });


// Option 2: 
// But to keep things clearer and reusable, let's assign these rendering instructions to a function.
// And then if we call renderBooks() it will run just as the code above.

// Define function that displays data
let displayBooks = () => {
  books.forEach((book) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
    wrapper.append(newDiv);
  });
};

// Run function that displays data
displayBooks();


// Option 3: 
// This function now TAKES IN a parameter (which we also sometimes call arguments). So it doesn't have to render the "books" object every time. 
// Think about it this way: we don't want to hardcode our data. We want to be able to pass in whatever array we want and render. 

let renderBooks = (data) => {
  data.forEach((book) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
    wrapper.append(newDiv);
  });
};

renderBooks(books);

// Here we're dynamically adding the genres as drowdown options too. 
// Selection & option are in-built HTML tags which allow for dropdowns. 

const genres = ["Fiction", "Nonfiction", "Poetry"];

let selection = document.querySelector("select");

genres.forEach(genre => {
  let option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  selection.appendChild(option);
});

// This event listener is logging the "value" of what option someone selects. 
// It's not doing anything with it yet!

selection.addEventListener("change", (e) => console.log(e.target.value));

// The concept of "e" can be hard to get used to. 
// If you pass arguments to an event listener function, the first one—e in this case—will automatically be interpreted as the event object, which contains details about the event.




