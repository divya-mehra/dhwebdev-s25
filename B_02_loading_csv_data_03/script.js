// #3: GET TEXT 3 (with map — it's a little cleaner)

// Why is it cleaner with map? Map transforms your enitre dataset at once.
// So isntead of appending every single row (with forEach), you can transform all the rows at once, use join() to add them together, and append all at once.

getText = async () => {
  const response = await fetch("banned.csv");
  let data = await response.text();
  
  data = data.replace(/\r/g, "");
  data = data.replace(/\"/g, "");

  
  let rows = data.split("\n").map((row) => row.split(","));
  
  // Remove the header (for our purposes)
  rows = rows.slice(1);
  
  displayRow(rows);
};

let displayRow = (rows) => {
  const html = rows
    .map((row) => {
      const title = row[0];
      const lastName = row[1];
      const firstName = row[2];

      return `
          <div class="row">
            <div><strong>Title:</strong> ${title}</div>
            <div><strong>Name:</strong> ${firstName} ${lastName}</div>
          </div>
        `;
    })
    .join("");

  // Add it to the page all at once
  document.querySelector("section").innerHTML = html;
};

getText().catch((err) => console.log(err));
