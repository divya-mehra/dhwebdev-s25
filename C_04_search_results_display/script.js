let input = document.querySelector("input");

let parsedData = [];

const getData = async () => {
    const response = await fetch("gutenberg_metadata.csv");
    let data = await response.text();
    parsedData = Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
    });

    parsedData = parsedData.data;
    displayData(parsedData);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // Cancel any default behavior
      event.preventDefault();
      const searchTerm = input.value;
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
            <div class="row">
              <div class="title">
              ${row.Title}
              </div>
            </div>
          `;
    })
    .join("");

  // Add it to the page all at once
  document.querySelector("section").innerHTML = html;
};

let search = (term) => {
  // const Fuse = require('fuse.js');
  const options = {
    includeScore: true,
    keys: ["Title"],
    threshold: 0.3 
  };
  const fuse = new Fuse(parsedData, options);
  const result = fuse.search(term);
  console.log(result);

  const matched = result.map((r) => r.item);
  displayData(matched);
};

getData();
