// ###
// From the "07_loading_json_data
// ###

let books = {};

fetch("books.json")
  .then((response) => response.json())
  .then((booksData) => {
    console.log(booksData);
    books = booksData;
    renderBooks(books);
  })
  .catch((error) => console.error("Error loading JSON:", error));

let wrapper = document.querySelector(".wrapper");

let renderBooks = (data) => {
  console.log(data);
  data.forEach((book) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("data-genre", book.genre);
    newDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
    wrapper.append(newDiv);
  });
};

// ###
// Sorting the data with localecompare
// ###

let sortData = (e) => {
  wrapper.innerHTML = ""; // Clear out the HTML
  const isAscending = e.target.classList.contains("sortaz"); // Figure out which way we're sorting
  books.sort((a, b) =>
    isAscending
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  ); // here, we're using localecompare which compares one at a time, and we're using a ternary operator
  renderBooks(books);
};

let azSelection = document.querySelector(".sortaz");
let zaSelection = document.querySelector(".sortza");

// Add the event listener to both sort options
document.querySelectorAll(".sortaz, .sortza").forEach((btn) => {
  btn.addEventListener("click", sortData);
});
