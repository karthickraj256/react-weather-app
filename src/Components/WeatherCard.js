import React from 'react'

function WeatherCard({weather}) {
  return (
    <div>
        <div className="weather-card">
            <div className="card-header">
                <div>
                    <p className="weather-city">{weather?.query?.location?.name}</p>
                    <p className="weather-description">{weather?.query?.location?.country}</p>
                </div>
                <img alt={'weather'} className={"weather-icon"}
                    src={weather?.query?.current?.condition?.icon} />
            </div>
            <div className="card-body">
                <h2 className="weather-temp">{weather?.query?.current?.temp_c}°C</h2>
                <div className="weather-details">
                    <div className="parameters">
                        <span className="param-label">Details</span>
                    </div>
                    <div className="parameters">
                        <span className="param-label">Feels Like:</span>
                        <span className="param-val">{weather?.query?.current?.temp_c} °C</span>
                    </div>
                    <div className="parameters">
                        <span className="param-label">Humidity: </span>
                        <span className="param-val">{weather?.query?.current?.wind_degree} %</span>
                    </div>
                    <div className="parameters">
                        <span className="param-label">Pressure: </span>
                        <span className="param-val">{weather?.query?.current?.wind_kph} hPs</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard