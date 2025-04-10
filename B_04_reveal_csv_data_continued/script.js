// Here we've expanded out dataset out for more details and we'll use a parsing library.

const getText = async () => {
  const response = await fetch("banned_detail.csv");
  let data = await response.text();

  // This takes care of removing the header and parsing the data
  // Check out documentation here: https://www.papaparse.com/docs
  // For it to work you need to add the library to your index.html page. Look at this folder's index page to get the link. 
  
  const parsedData = Papa.parse(data, {
    header: true,
    skipEmptyLines: true,
  });

  displayRow(parsedData.data);
};

const displayRow = (rows) => {
  console.log(rows);
  const html = rows
    .map((row) => {
      const title = row.Title;
      const author = row["Author"];
      const state = row["State"];
      const school = row["District"];

      return `
          <div class="row" data-author="${author}" data-state="${state}" data-school="${school}">
            <div class="title">
            ${title}
            </div>
          </div>
        `;
    })
    .join("");

  // Add it to the page all at once
  document.querySelector("section").innerHTML = html;

  // Same as before. Just with a few more details. You could continue to build this out. 

  document.querySelectorAll(".row").forEach((rowDiv) => {
    rowDiv.addEventListener("click", () => {
      const author = rowDiv.getAttribute("data-author");
      const state = rowDiv.getAttribute("data-state");
      const school = rowDiv.getAttribute("data-school");

      document.querySelector(".details").innerHTML = `
        <h2>${author}</h2>
        <h4>${school}, ${state}</h4>
      `;
    });
  });
};

getText().catch((err) => console.log(err));
