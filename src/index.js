const results = document.querySelector("#results")

const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movie = `<li class="list-inline-item">
          <img src="${result.Poster}" alt="">
          <p>${result.Title}</p>
        </li>`;
        results.insertAdjacentHTML("beforeend", movie);
      });
    });
};


const form = document.querySelector('#search-movies');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector("#keyword");
  results.innerHTML = "";
  searchMovies(input.value);
})

const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};


const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);





















