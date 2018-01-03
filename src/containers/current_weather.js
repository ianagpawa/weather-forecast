import React, { Component } from 'react';
import { connect } from 'react-redux';
import Current from "../components/current_weather";
import WeatherIcons from "../icons.json";


class CurrentWeather extends Component {

    renderCurrentWeather(cityData){
        const city_name = cityData.city.name;
        const listing = cityData.list[0]
        const main = listing.main
        const currentTemp = main.temp;
        const currentTempMin = main.temp_min;
        const currentTempMax = main.temp_max;
        const currentPres = main.pressure;
        const currentHum = main.humidity;

        const weather = listing.weather;
        const condition = weather.main;
        const description = weather.description;
        const iconId = weather.id;

        const prefix = 'wi wi-';
        const icon = WeatherIcons[iconCode].icon;

        return (
            <Current low={currentTempMin} high={currentTempMax}
                temp={currentTemp} humidity={currentHum}
                pressure={currentPres} name={city_name} />
        );
    }


    render () {
        return (
            <div>{this.props.weather.map(this.renderCurrentWeather)}</div>
        );
    }
}


function mapStateToProps({ weather }){
    return { weather }; // { weather: weather} ES6 shortcut
}

export default connect(mapStateToProps)(CurrentWeather);
