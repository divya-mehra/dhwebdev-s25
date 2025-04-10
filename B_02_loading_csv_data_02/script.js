// #2: GET TEXT 2 (with forEach())

let getText = async () => {
  const response = await fetch("banned.csv");
  let data = await response.text();

  // Some regex clean up stuff. It's not too important to nail down right now. Regular expressions are a big topic for another course (not this one).
  data = data.replace(/\r/g, "");
  data = data.replace(/\"/g, "");

  // Split into rows by splitting at every new line
  let rows = data.split("\n");

  // Remove the header (for our purposes)
  rows = rows.slice(1);

  // For each of the rows, split by commas
  rows.forEach((el) => {
    const row = el.split(",");
    console.log(row);

    // Call a separate function to handle the row data
    displayRow(row);
  });
  // console.log(rows);
};

let displayRow = (row) => {
  // For each row, we have an array of three items.
  // Since a comma separates the first and last name too, we actually get those back as separate items
  const title = row[0];
  const lastName = row[1];
  const firstName = row[2];

  // Create a new div for each row
  const rowDiv = document.createElement("div");

  // Add a class of "row" to every div. So we can style later on.
  rowDiv.classList.add("row");

  // Add the data to the div
  rowDiv.innerHTML = `<div><strong>Title:</strong> ${title}</div><div><strong>Name:</strong> ${firstName} ${lastName}</div>`;

  // Append the new div to the container
  document.querySelector("section").appendChild(rowDiv);

  // And this happens for every single row
};

// Call the getText function. And add a catch error method, just in case.
getText().catch((err) => console.log(err));

