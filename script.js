const apiKey = "96ac1d6dcd5742d9891fad941752bf86";
const locationEndpoint = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`;

const cityElement = document.getElementById("city");
const countryElement = document.getElementById("country");
const city2Element = document.getElementById("city2");
const country2Element = document.getElementById("country2");

async function fetchLocation() {
  try {
    const response = await fetch(locationEndpoint);
    const data = await response.json();
    const city = data.city;
    const country = data.country_name;

    updateLocation(city, country);
  } catch (error) {
    console.log("Error fetching location data:", error);
  }
}

function updateLocation(city, country) {
  cityElement.textContent = city;
  countryElement.textContent = `, ${country}`;
  city2Element.textContent = city;
  country2Element.textContent = `, ${country}`;
}

fetchLocation();
