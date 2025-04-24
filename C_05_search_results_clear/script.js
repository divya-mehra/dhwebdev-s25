let titles;
let input = document.querySelector("input");

const getData = async () => {
  const response = await fetch("gutenberg_metadata.csv");
  // Not the use of text() instead of json()
  let data = await response.text();

  // This takes care of removing the header and parsing the data
  // Check out documentation here: https://www.papaparse.com/docs
  // For it to work you need to add the library to your index.html page. Look at this folder's index page to get the link.

  const parsedData = Papa.parse(data, {
    header: true,
    skipEmptyLines: true,
  });

  // console.log(parsedData.data);
  titles = parsedData.data.map((row) => {
    return row.Title;
  });
  // console.log(titles);

  displayData(titles);

  // I'm adding this here because it needs to run AFTER data is displayed

  // search("The Adventures of Sherlock Holmes");

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

let displayData = (titles) => {
  const html = titles
    .map((row) => {
      return `
            <div class="row">
              <div class="title">
              ${row}
              </div>
            </div>
          `;
    })
    .join("");

  // Add it to the page all at once
  document.querySelector("section").innerHTML = html;
};

let search = (term) => {
  if (term === "") {
    // If search is empty, show everything
    displayData(titles);
    return;
  } else {
    const options = {
      includeScore: true,
      keys: ["Title"],
    };
    const fuse = new Fuse(titles, options);
    const result = fuse.search(term);
    console.log(result);

    const filteredResults = result.filter((r) => r.score <= 0.6);

    // Look into this
    const matchedTitles = filteredResults.map((r) => r.item);
    displayData(matchedTitles);
  }
};

getData();
