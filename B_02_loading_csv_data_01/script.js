console.log("going to say hello");

// #1: GET TEXT 1 (no parsing)

// Here we are getting the CSV data and just showing it as is (without parsing).
// The dataset is from PEN America
// link: https://pen.org/book-bans/2023-banned-book-list/

let getText = async () => {
  const response = await fetch("banned.csv");
  const text = await response.text();
  document.querySelector("h2").textContent = text;
  console.log(text);
};

getText().catch((err) => console.log(err));

// Usually, there are libraries that will parse for you. Like Papa Parser (in example 4)
// For now, let's do it manually.

