const form=document.querySelector(".search");
const input=document.querySelector(".input");
const container=document.querySelector(".container");
const loader = document.querySelector(".loader");
const api="YGTNR5QNDJV2BXP2E3A876RPX";

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city=input.value.trim();
    if(!city) {
        displayError("Please enter a city");
        return;
    }
    loader.classList.remove("hidden");
    container.classList.add("hidden");
    try {
            const weatherData = await getWeather(city);
            loader.classList.add("hidden");
            display(weatherData);
        }
        catch(error) {
            loader.classList.add("hidden");
            console.error(error);
            displayError(error.message);
        }
})

async function getWeather(city) {
    
    const url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${api}&contentType=json`; 
    const res = await fetch(url);
    if(!res.ok) throw new Error("City not found!");
    return await res.json();
}

function display(data) {  
    const {address: city,
          currentConditions: {conditions,temp,humidity}} = data;
    container.textContent="";
    container.classList.remove("hidden");
    const cityDisplay = document.createElement("div");
    cityDisplay.textContent=city.charAt(0).toUpperCase() + city.slice(1);
    container.appendChild(cityDisplay);
    cityDisplay.classList.add("city");
    const tempDisplay = document.createElement("div");
    tempDisplay.textContent=`${((temp-32)/1.8).toFixed(1)}°C/${temp}°F`;
    container.appendChild(tempDisplay);
    tempDisplay.classList.add("temp");
    const humidityDisplay = document.createElement("div");
    humidityDisplay.textContent=`Humidity: ${humidity}%`;
    container.appendChild(humidityDisplay);
    humidityDisplay.classList.add("humidity");
    const descDisplay = document.createElement("div");
    descDisplay.textContent=conditions.charAt(0).toUpperCase() + conditions.slice(1);
    container.appendChild(descDisplay);
    descDisplay.classList.add("desc");
}

function displayError(text) {
    const error=document.createElement("div");
    error.textContent=text;
    error.classList.add("error");
    container.textContent="";
    container.classList.remove("hidden");
    container.appendChild(error);
}