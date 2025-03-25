// ###
// From the "05_changing_display_with_dropdown"
// ###

const books = [
  {
    title: "I Who Have Never Known Men",
    author: "Jacqueline Harpman",
    yearCreated: 1995,
    genre: "Fiction",
  },
  {
    title: "Lincoln in the Bardo",
    author: "George Saunders",
    yearCreated: 2017,
    genre: "Fiction",
  },
  {
    title: "Identity and Violence",
    author: "Amartya Sen",
    yearCreated: 2006,
    genre: "Nonfiction",
  },
  {
    title: "Martyr!",
    author: "Kaveh Akbar",
    yearCreated: 2024,
    genre: "Fiction",
  },
  {
    title: "The Moustache",
    author: "Emmanuel Carrère",
    yearCreated: 1986,
    genre: "Fiction",
  },
  {
    title: "The Memory Police",
    author: "Yoko Ogawa",
    yearCreated: 1994,
    genre: "Fiction",
  },
  {
    title: "Evicted",
    author: "Matthew Desmond",
    yearCreated: 2016,
    genre: "Nonfiction",
  },
  {
    title: "Say Nothing",
    author: "Patrick Radden Keefe",
    yearCreated: 2019,
    genre: "Nonfiction",
  },
  {
    title: "Ugly Feelings",
    author: "Sianne Ngai",
    yearCreated: 2005,
    genre: "Nonfiction",
  },
  {
    title: "The Story and the Situation",
    author: "Vivian Gornick",
    yearCreated: 1992,
    genre: "Nonfiction",
  },
  {
    title: "Live or Die",
    author: "Anne Sexton",
    yearCreated: 1966,
    genre: "Poetry",
  },
  {
    title: "Speak, Memory",
    author: "Vladimir Nabokov",
    yearCreated: 1951,
    genre: "Nonfiction",
  },
];

let wrapper = document.querySelector(".wrapper");
let filters = document.querySelectorAll(".filter");

filters.forEach((btn) =>
  btn.addEventListener("click", (e) => e.target.classList.toggle("active"))
);

let renderBooks = (data) => {
  data.forEach((book) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("data-genre", book.genre);
    newDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
    wrapper.append(newDiv);
  });
};

renderBooks(books);

const genres = ["Fiction", "Nonfiction", "Poetry"];

let selectionWrapper = document.querySelector(".btns");

genres.forEach((genre) => {
  let option = document.createElement("div");
  option.textContent = genre;
  // Adding two classes here, including active, so they start out as "active"
  option.classList.add("btn");
  option.classList.add("active");
  selectionWrapper.appendChild(option);
});

// TODO: Add comments for this section
// TODO: Look @ why it sometimes ends up with opposite nav signalling and content
// Note to class: there are a few loose ends here.
// We're trying to allow multiple selections, which is why we use an array, selectedGenres, to "push" selections into it.
// I will fix it up and add comments.
// It should be simple (and similar to the dropdown example) if you don't need multiple selections.

let changeData = (e) => {
  let selected = e.target.textContent;
  e.target.classList.toggle("active");

  let selectedGenres = [];

  selection.forEach((btn) => {
    if (btn.classList.contains("active")) {
      selectedGenres.push(btn.textContent);
    }
  });

  let bookDivs = document.querySelectorAll(".wrapper div");

  bookDivs.forEach((book) => {
    let bookGenre = book.getAttribute("data-genre");

    if (selectedGenres.length === 0 || selectedGenres.includes(bookGenre)) {
      book.classList.remove("hide");
    } else {
      book.classList.add("hide");
    }
  });
};

let selection = document.querySelectorAll(".btn");
selection.forEach((btn) => btn.addEventListener("click", (e) => changeData(e)));
