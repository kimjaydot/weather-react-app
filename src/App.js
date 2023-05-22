import "./App.css";

function App() {
  let weatherData = {
    city: "New York",
    date: "12:00 PM Tuesday",
    temp: "15",
    description: "cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: "80",
    wind: "15",
  };

  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="overview">
              <form className="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Search City"
                      class="form-control"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      class="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <h1 className="city">{weatherData.city}</h1>
              <ul>
                <li>Last Updated at: {weatherData.date}</li>
                <li>{weatherData.description}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <img src={weatherData.imgUrl} alt="Clear" id="icon" />
                <div class="temperature">
                  <strong className="currentTemp">{weatherData.temp}</strong>

                  <span class="units">
                    <a href="/" id="celsius-link" className="active">
                      C
                    </a>{" "}
                    |
                    <a href="/" id="fahrenheit-link">
                      F
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} speed</li>
                </ul>
              </div>
            </div>
          </div>
          <small>
            <a
              href="https://github.com/kimjaydot/weather-react-app"
              target="_blank"
              rel="noreferrer"
            >
              Open Sourced Code
            </a>
            by Kimberley Johnson
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
