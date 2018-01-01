import React, { Component } from 'react';
import { connect } from 'react-redux';
import Current from "../components/current_weather";


class CurrentWeather extends Component {

    renderCurrentWeather(cityData){
        const city_name = cityData.city.name;
        const currentTemp = cityData.list[0].main.temp;
        const currentTempMin = cityData.list[0].main.temp_min;
        const currentTempMax = cityData.list[0].main.temp_max;
        const currentPres = cityData.list[0].main.pressure;
        const currentHum = cityData.list[0].main.humidity;

        return (
            <Current low={currentTempMin} high={currentTempMax}
                temp={currentTemp} humidity={currentHum}
                pressure={currentPres} />
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
