import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/chart";
import Current from "../components/current_weather"


class WeatherList extends Component {

    renderCurrentWeather(cityData){
        const city_name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const tempMin = cityData.list.map(weather => weather.main.temp_min);
        const tempMax = cityData.list.map(weather => weather.main.temp_max);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        const currentTemp = temps[0];
        const currentPres = pressures[0];
        const currentHum = humidities[0];
        const currentTempMin = tempMin[0];
        const currentTempMax = tempMax[0];


        return (
            <Current low={currentTempMin} high={currentTempMax}
                temp={currentTemp} humidity={currentHum}
                pressure={currentPres} />
        );
    }

    renderWeather(cityData) {
        const city_name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const tempMin = cityData.list.map(weather => weather.main.temp_min);
        const tempMax = cityData.list.map(weather => weather.main.temp_max);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        const currentTemp = temps[0];
        const currentPres = pressures[0];
        const currentHum = humidities[0];
        const currentTempMin = tempMin[0];
        const currentTempMax = tempMax[0];

        return (
            <tr key={city_name}>
                <td>{city_name}</td>
                <td>

                </td>
                <td><Chart data={temps} color='red' units='K'/></td>
                <td><Chart data={pressures} color='green' units='hPa'/></td>
                <td><Chart data={humidities} color='black' units='%'/></td>
            </tr>
        );
    }

    render () {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather }; // { weather: weather} ES6 shortcut
}

export default connect(mapStateToProps)(WeatherList);
