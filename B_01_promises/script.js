// PROMISES 
// These are for asynchornous requests. You request some data, you get a promise back (because it can't get a response right away)
// You know you'll get the data, but you don't know when exactly 
// You don't want JavaScript to stop doing everything and freeze. 
// So you use fetch OR async/await, to let it know that things can continue while we wait for the response
// then() & await: tell us what to do after we get the response

console.log("going to say hello");

// FETCH: An older, but totally valid way of doing things. I have this in previous examples. 

fetch("hello.txt")
  // Convert the response to text
  .then((response) => response.text()) 
  // Then...do something with it
  .then((text) => {
    console.log(text);
    document.querySelector("h2").textContent = text;
  }) 
  // If there's an error, log it to the console
  .catch((error) => console.log(error));

// ASYNC AWAIT: A newer, more readable way of dealing with promises

const getText = async () => {
    const response = await fetch("hello.txt")
    const text = await response.text();
    document.querySelector("h2").textContent = text;
};

getText().catch(err => console.log(err));
