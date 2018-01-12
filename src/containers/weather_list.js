import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/chart";


class WeatherList extends Component {

    renderWeather(cityData) {
        const city_name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={city_name}>
                <td>{city_name}</td>
                <td><Chart data={temps} color='red' units='K' measure="Temperature" /></td>
                <td><Chart data={pressures} color='green' units='hPa' measure="Pressure"/></td>
                <td><Chart data={humidities} color='black' units='%' measure="Humidity"/></td>
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
