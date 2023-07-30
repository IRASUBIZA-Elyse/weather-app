let search = document.querySelector('.search-bar');
let cityContent = document.querySelector('.city');
let temperature = document.querySelector('.temperature-degree');
let description = document.querySelector('.description');
let humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.wind');
let cityName = search.value

const apiKey = "e18c323ec08b4378ba2115015232707"

function searchWeather(city)
fetch("https://api.weatherapi.com/v1/current.json?key="+apiKey+"&q="+city+"")
.then(respo => respo.json())
.then(data => displayWeather(data))

function displayWeather(data){
    cityContent.innerHTML =`Weather in${city}`
    temperature.innerHTML = "C";
    description.innerHTML = 
    humidity.innerHTML = "Humidity:"+ + "%"
    windSpeed.innerHTML = "Wind Speed" + + "km/hr"
}

document.querySelector(".search button").addEventListener("click",searchWeather(cityName))

