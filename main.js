let search = document.querySelector('.search-bar');
let cityContent = document.querySelector('.city');
let temperature = document.querySelector('.temperature-degree');
let description = document.querySelector('.description');
let humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.wind');


const apiKey = "e18c323ec08b4378ba2115015232707"
// let cityn= "kampala"

function searchWeather(city){
    console.log(city)
fetch("https://api.weatherapi.com/v1/current.json?key="+apiKey+"&q="+city+"")
.then(respo => respo.json())
.then(data => displayWeather(data))
.catch(err => error(err))
}
function displayWeather(data){
    console.log(data)
    cityContent.textContent =`Weather in ${data.location.name}`
    temperature.textContent = `${data.current.temp_c} °C`;
    description.textContent = `${data.current.condition.text}`
    humidity.textContent = `Humidity: ${data.current.humidity} %`
    windSpeed.textContent = `Wind Speed: ${data.current.wind_kph} km/hr`
}

function error(err){
    console.log(err)
    if(err.code === 400){
        return alert("the city doesn't exist")
    }else {
        console.log(err)
    }
}
document.querySelector(".btn").addEventListener("click", ()=>{
    const inValue = search.value
    searchWeather(inValue)})

