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
  if (term === "") {
    // If search is empty, show everything
    displayData(parsedData);
    return;
  } else {
    let filteredData = parsedData.filter((row) =>
      row.Title.toLowerCase().includes(term.toLowerCase())
    );

    displayData(filteredData);
  }
};

getData();
