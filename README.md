# Atmos

A simple and clean weather application built using HTML, CSS, and JavaScript, powered by the Visual Crossing Weather API.

The app allows users to search for a city and view current weather conditions along with basic daily details, presented in a minimal and responsive UI.

---

## Features

- Search weather by city name
- Displays:
  - Current temperature (°C & °F)
  - Maximum and minimum temperature
  - Humidity
  - Precipitation probability
  - Weather condition description
- Responsive layout (mobile and desktop)
- Loading indicator while fetching data
- Error handling for invalid city names
- Clean, minimal UI with a background image

---

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Visual Crossing Weather API

No frameworks or libraries used.

---

## API Used

Visual Crossing Weather API

Endpoint:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}

Data used:
- currentConditions
- days (today’s forecast)

Temperature is fetched in Fahrenheit and converted to Celsius on the client side.

---

## Setup and Usage

1. Clone the repository:
   git clone https://github.com/mech071/weather-app.git

2. Open index.html in your browser.

3. Add your Visual Crossing API key in the JavaScript file:
   const api = "YOUR_API_KEY_HERE";

No build tools or installation required.

---

## Author

Snehasis Chakraborty 
GitHub: https://github.com/mech071

---

## License

This project is licensed under MIT License.
