// its code is show all contrys in one time

// const API_URL = "https://restcountries.com/v3.1/all";

// const PER_PAGE_PRODUCT = 6;
// const TOTAL_PAGE = 10;

// let currentPage = 1;
// let currentBrand = "";

// function fetchData() {
//   const url = currentBrand
//     ? `${API_URL}?page=${currentPage}&results=${PER_PAGE_PRODUCT}&email=${currentBrand}`
//     : `${API_URL}?page=${currentPage}&results=${PER_PAGE_PRODUCT}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       //display the fetch data on the user interface
//       const userList = document.getElementById("user-list");
//       userList.innerHTML = "";

//       for (let user of data) {
//         const userDiv = document.createElement("div");

//         userDiv.innerHTML = `<div class="container1"><div class="container"><b>Official Name</b>${user.name.official} <b>Capital</b>${user.capital}</div><div><b>Capital info</b>${user.capitalInfo}</div>
//       <img src="${user.flags.png}">
//     <div><b>Timezones</b>${user.timezones}</div>
//     <div><b>Population: </b> ${user.population}</div><div>`;

//         userList.appendChild(userDiv);
//       }
//     })
//     .catch((error) => console.error(error));
// }

// //fetch the data for the first page when the page loads
// fetchData();

//handle the pagination navigation

// document.getElementById("prev-btn").addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     fetchData();
//   }
// });
// document.getElementById("next-btn").addEventListener("click", () => {
//   if (currentPage < TOTAL_PAGE) {
//     currentPage++;
//     fetchData();
//   }
// });

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});
