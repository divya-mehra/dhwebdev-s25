let parsedData = [];
let currentTitle = null;
let input = document.querySelector("input");

const getData = async () => {
  const response = await fetch("gutenberg_metadata.csv");
  let data = await response.text();

  parsedData = Papa.parse(data, {
    header: true,
    skipEmptyLines: true,
  });

  parsedData = parsedData.data;

  // titles = parsedData.data.map((row) => {
  //   return row.Title;
  // });

  displayData(parsedData);

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Cancel any default behavior
      event.preventDefault();
      const searchTerm = input.value;
      console.log(searchTerm);
      search(searchTerm);

      // If you want: clear the input
      // input.value = "";
    }
  });
};

let displayData = (data) => {
  const html = data
    .map((row) => {
      return `
            <div class="row" data-title="${row.Title}" data-author="${row.Author}" data-bookshelf="${row.Bookshelf}">
              <div class="title">
              ${row.Title}
              </div>
            </div>
          `;
    })
    .join("");

  // Add it to the page all at once
  document.querySelector("section").innerHTML = html;

  document.querySelectorAll(".row").forEach((row) => {
    row.addEventListener("click", () => {
      toggleDetails(row.dataset.title, row.dataset.author, row.dataset.bookshelf);
    });
  });
};

let toggleDetails = (title, author, bookshelf) => {
  const aside = document.querySelector("#details");

  if (title === currentTitle) {
    aside.style.display = "none";
    currentTitle = null;
  } else {
    aside.innerHTML = `<h2 class="aside-title">${title}</h2><hr><p class="author">Author: ${author}</p><p class="bookshelf">${bookshelf}</p>`;
    aside.style.display = "block";
    currentTitle = title;
    console.log(title);
  }
};

let search = (term) => {
  if (term === "") {
    // If search is empty, show everything
    displayData(parsedData);
    return;
  } else {
    let filteredData = parsedData.filter((item) =>
      item.Title.toLowerCase().includes(term.toLowerCase())
    );

    displayData(filteredData);
  }
};

getData();
