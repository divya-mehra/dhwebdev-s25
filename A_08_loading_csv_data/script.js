// ###
// This example shows how to bring in CSV data. It does not include any filters.
// It DOES include bringing in a library. We haven't been over this yet, but it's the easiest way to do it.
// ###

// Go to your HTML and add this script (already added in the HTML in this example):
//<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js"></script>;
// Here's the documentation: https://www.papaparse.com/docs

// Use "fetch" to bring in csv

fetch("books.csv")
  .then((response) => response.text())
  .then((csvText) => {
    let books = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    }).data; // assign csv text to the variable books.
    console.log(books); // Check parsed data
    renderBooks(books); // Run the function
  })
  .catch((error) => console.error("Error loading CSV:", error));

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


