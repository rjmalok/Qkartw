import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  try {
    const result = await fetch(config.backendEndpoint + "/cities");
    const data = await result.json();
    return data;
  } catch (e) {
    return null;
  }

  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  let ele = document.createElement("div");
  ele.className = "col-6 col-lg-3 mb-4";
  ele.innerHTML = `
  <a href ="page/adventures/?city=${id}" id="${id}">
    < div class ="title">
      <div class="title-text text-center">
        <h5>${city}</h5>
        <p>${description}</p>
     </div>
           <img class="img-responsive" src"${image}"/></div>
  </a>
  `;
  document.getElementById("data").appendChild(ele);
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
}

export { init, fetchCities, addCityToDOM };
