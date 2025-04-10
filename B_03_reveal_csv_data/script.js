// Here we want to show details on the right-hand panel.
// So, we have the titles all on the left, and when we click on the title, we want additional details from the CSV to show up on the right.
// This is just one way of displaying information.

const getText = async () => {
  const response = await fetch("banned.csv");
  let data = await response.text();
  data = data.replace(/\r/g, "");
  data = data.replace(/\"/g, "");

  let rows = data.split("\n").map((row) => row.split(","));

  // Remove the header (for our purposes)
  rows = rows.slice(1);

  displayRow(rows);
};

const displayRow = (rows) => {
  const html = rows
    .map((row) => {
      const title = row[0];
      const lastName = row[1];
      const firstName = row[2];
      // Notice we are adding data attributes with "data-" but not displaying them just yet.
      return `
          <div class="row" data-firstname="${firstName}" data-lastname="${lastName}">
            <div class="title">
            ${title}
            </div>
          </div>
        `;
    })
    .join("");

  // Add it to the page all at once
  document.querySelector("section").innerHTML = html;

  // Above is (almost) all the same as the previous example.
  //Now we add: Event Listening

  // Add click event listeners to each row
  document.querySelectorAll(".row").forEach((rowDiv) => {
    rowDiv.addEventListener("click", () => {
      // here we get the correspinding data attributes attached to the row and then display.
      const firstName = rowDiv.getAttribute("data-firstname");
      const lastName = rowDiv.getAttribute("data-lastname");

      // Show the full name
      document.querySelector(".details").innerHTML = `
        <h2>${firstName} ${lastName}</h2>
      `;
    });
  });
};

// Call the function with an error handler
getText().catch((err) => console.log(err));
