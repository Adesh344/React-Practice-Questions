import React, { useState } from 'react'

function Fourteen() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [temp, setTemp] = useState('');

    const searchCity = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8a7f4ad860dc08038043adbabd1d2363&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);
                setTemp(data.main.temp);
            })
            .catch((error) => console.error('Error fetching weather data:', error));
    }

    return (
        <>
            <h3>Enter Your City Name Here</h3>
            <input type="text" placeholder='City Name' onChange={(e) => setCity(e.target.value)} />
            <button onClick={searchCity}>Search</button>

            <h2>{temp ? `${temp} Degree Celsius` : ''}</h2>

            {weather && (
                <div>
                    <h3>Weather in {weather.name}</h3>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </>
    )
}

export default Fourteen
