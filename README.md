# 🌦️ Weather Application

A responsive weather application built using **HTML, CSS, and JavaScript** that allows users to search for a city and view its current weather information.

The application uses the **OpenWeatherMap API** to retrieve real-time weather data and displays the results on a separate detailed weather page.

## ✨ Features

* 🔎 Search weather by city name
* 🌡️ Display current temperature
* 🥵 Display "feels like" temperature
* 📈 Display maximum temperature
* 📉 Display minimum temperature
* ☁️ Display current weather condition
* 👁️ Display visibility in kilometers
* 🖼️ Change the weather illustration according to the weather condition
* 🌄 Animated background images
* 📱 Responsive design for mobile devices
* 📲 Tablet-friendly layout
* 💻 Laptop and desktop responsive layouts
* ↩️ Navigation back to the city search page
* ⌨️ Press **Enter** to search for a city

## 🛠️ Technologies Used

* **HTML5** — Structure of the application
* **CSS3** — Styling, animations, and responsive design
* **JavaScript** — Application logic and API handling
* **OpenWeatherMap API** — Weather data
* **Google Fonts** — Custom typography

## 📁 Project Structure

```text
Weather-Application/
│
├── index.html
├── Details.html
│
├── style.css
├── Details.css
│
├── script.js
│
├── clear.svg
├── rainy.svg
├── snowy.svg
├── thunderstorm.svg
├── windy.svg
│
├── 1.jpg
├── 2.jpg
├── 3.jpg
├── 4.jpg
└── 5.jpg
```

## 🔄 How It Works

The application consists of two main pages.

### 1. Search Page

The user enters a city name into the search box and clicks **Search City**.

The JavaScript retrieves the entered city and encodes it into a URL query parameter:

```text
Details.html?city=Delhi
```

This allows the second page to know which city the user searched for.

### 2. Details Page

The details page reads the city name from the URL and sends a request to the OpenWeatherMap API.

The returned data is then used to display:

```text
Temperature
Feels Like
Maximum Temperature
Minimum Temperature
Weather
Visibility
```

The application also selects a corresponding weather illustration based on the returned weather condition.

## 🌐 API

This project uses the **OpenWeatherMap Current Weather API**.

The API request follows this structure:

```text
https://api.openweathermap.org/data/2.5/weather
```

The request includes:

* City name
* API key
* Metric units

The JavaScript then processes the JSON response and extracts the required weather information.

## 🎨 Weather Illustrations

Different weather conditions use different SVG illustrations:

| Weather Condition             | Illustration       |
| ----------------------------- | ------------------ |
| Clear                         | `clear.svg`        |
| Rain / Drizzle                | `rainy.svg`        |
| Snow                          | `snowy.svg`        |
| Thunderstorm                  | `thunderstorm.svg` |
| Mist / Fog / Haze / Dust etc. | `windy.svg`        |
| Clouds                        | `clear.svg`        |

## 🌄 Background Animation

The application uses five background images and CSS animations to create a continuously changing weather-themed background.

The backgrounds are cycled through using a CSS `@keyframes` animation.

```css
@keyframes changebghead {
    0% { ... }
    20% { ... }
    40% { ... }
    60% { ... }
    80% { ... }
}
```

## 📱 Responsive Design

The application is designed to work across different screen sizes.

### Mobile

For screens up to **600px**, the interface changes to a single-column layout so that the search controls and weather information fit comfortably on smaller screens.

### Tablet

For screens between **601px and 1024px**, the weather details use a more compact layout suitable for tablet screens.

### Laptop

For screens between **1025px and 1400px**, the application uses a more compact desktop layout.

### Desktop

Larger screens use the full desktop layout.

## 🚀 Running the Project

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Open the project folder.

3. Open `index.html` in a browser.

4. Enter a city name.

5. Click **Search City**.

The application will fetch the weather information and display the details on the next page.

## ⚠️ API Key

The application requires an OpenWeatherMap API key.

For a public GitHub repository, **do not expose your API key directly in your JavaScript source code**.

For learning purposes, the current project uses the API key directly in the frontend. For a production application, the API request should instead be handled through a backend/server-side environment where the API key can be kept private.

## 📚 What I Learned

This project helped me practice:

* Working with the **DOM**
* Handling button and keyboard events
* Using `fetch()` to make API requests
* Working with **Promises and `async/await`**
* Processing JSON API responses
* Using URL query parameters
* Dynamically updating HTML elements
* Conditional logic with `switch`
* Responsive CSS using media queries
* CSS animations
* Organizing a multi-page JavaScript application

## 🔮 Possible Future Improvements

Some features that could be added in future versions:

* 📅 5-day weather forecast
* 🌡️ Hourly weather forecast
* 🌅 Sunrise and sunset times
* 💨 Wind speed and direction
* 💧 Humidity
* 🌡️ Feels-like temperature comparison
* 📍 Current-location weather using Geolocation API
* 🌙 Light/dark theme based on time
* ⭐ Recently searched cities
* ⚠️ Better error messages instead of browser alerts
* 🔐 Move API requests to a backend to protect the API key

## 👨‍💻 Author

**Adit Prasad**

