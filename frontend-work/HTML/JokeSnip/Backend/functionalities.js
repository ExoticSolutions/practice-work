const requests = {
  baseURL: `https://v2.jokeapi.dev/joke/Any?type=single`,
};
//api site https://sv443.net/jokeapi/v2/
const outputElement = document.querySelector(".output");

document.querySelector(`.clear-btn`).onclick = function () {
  console.clear();
  outputElement.innerHTML = ``;
};

document.querySelector(`.generate-btn`).onclick = function () {
  console.clear();
  getjoke();
};

function getjoke() {
  const endpoint = requests.baseURL;
  console.time("API call completed in:");

  fetch(endpoint)
    .then(function (response) {
      console.timeEnd("API call completed in:");
      return response.json();
    })
    .then(function (data) {
      displayJoke(data);
    })
    .catch((err) => console.log(err));
}
function displayJoke(jokeData) {
  const category = jokeData.category;
  const joke = jokeData.joke;
  console.log(`Response recieved: ${joke}`);
  outputElement.innerHTML = `<h5 class="joke-category">Category: ${category}</h5>\n<h5 class="mt-3 joke-text">${joke}</h5>`;
}
console.log(outputElement);
