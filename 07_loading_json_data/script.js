// ###
// This example shows how to bring in JSON data. It does not include any filters. 
// ###

// Create an empty object to hold the data you bring in
let books = {};

// Use "fetch" to bring in json

fetch("books.json")
  .then((response) => response.json()) // this line is translating the json
  .then((booksData) => { // you can set any placeholder here to refer to your data. I'vejust added "booksData"
    console.log(booksData)
    books = booksData; // this is what I want to do with my data. First, assign it to my empty object. 
    renderBooks(books); // then: call renderBooks with the data as an argument. 
  })
  .catch((error) => console.error("Error loading JSON:", error));

let wrapper = document.querySelector(".wrapper");

let renderBooks = (data) => {
  data.forEach((book) => {
    let newDiv = document.createElement("div");
    // Data Attributes
    newDiv.setAttribute("data-genre", book.genre);
    newDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
    wrapper.append(newDiv);
  });
};

renderBooks(books);
