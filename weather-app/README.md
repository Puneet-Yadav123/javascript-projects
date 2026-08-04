# Weather App

A simple, responsive weather application that lets you search for any city and view live weather details. Built with HTML, CSS, and vanilla JavaScript using the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- Search weather by city name
- Real-time temperature, humidity, and wind speed
- Dynamic weather icons based on conditions (Clear, Clouds, Rain, Drizzle, Mist)
- Error handling for invalid city names
- Clean, mobile-friendly UI with gradient card design

## Tech Stack

- **HTML5** — structure and layout
- **CSS3** — styling and responsive design
- **JavaScript (ES6+)** — API calls with `fetch` and async/await
- **OpenWeatherMap API** — weather data
- **Google Fonts (Poppins)** — typography

## Project Structure

```
weather-app/
├── index.html      # Main app page and JavaScript logic
├── style.css       # Styles for the weather card and layout
├── search.png      # Search button icon
├── humidity.png    # Humidity detail icon
├── wind.png        # Wind speed detail icon
├── clear.png       # Clear sky weather icon
├── clouds.png      # Cloudy weather icon
├── rain.png        # Rain weather icon
├── drizzle.png     # Drizzle weather icon
├── mist.png        # Mist/fog weather icon
├── snow.png        # Snow weather icon (asset included)
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- An [OpenWeatherMap API key](https://openweathermap.org/api) (free tier available)

### Installation

1. Clone or download this repository.
2. Open `index.html` in your code editor.
3. Replace the API key in the script section:

   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

4. Save the file.

### Running the App

Open `index.html` in your browser, or use a local development server for the best experience:

**Using Live Server (VS Code extension):**
- Right-click `index.html` → **Open with Live Server**

**Using Python:**
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## How to Use

1. Enter a city name in the search box (e.g. `London`, `Tokyo`, `Mumbai`).
2. Click the search button.
3. View the current weather:
   - Temperature (°C)
   - City name
   - Humidity (%)
   - Wind speed (km/h)
   - Weather condition icon

If the city name is invalid, an error message is shown instead of the weather card.

## API Reference

This app uses the OpenWeatherMap Current Weather Data endpoint:

```
https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid={API_KEY}
```

- `units=metric` — temperature in Celsius, wind in m/s (displayed as km/h)
- `q` — city name
- `appid` — your API key


