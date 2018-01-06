import React, { Component } from 'react';
import { connect } from 'react-redux';
import Current from "../components/current_weather";
import DailyWeather from "../components/weather";
import WeatherIcons from "../icons.json";
import timestamp from 'unix-timestamp';



class CurrentWeather extends Component {

    renderCurrentWeather(cityData){
        const city_name = cityData.city.name;
        const listing = cityData.list[0];
        const dt = listing.dt;
        const time = timestamp.toDate(dt).toString().split(" ")[0];
        const main = listing.main;
        const currentTemp = main.temp;
        const currentTempMin = main.temp_min;
        const currentTempMax = main.temp_max;
        const currentPres = main.pressure;
        const currentHum = main.humidity;

        const weather = listing.weather[0];
        const condition = weather.main;
        const description = weather.description;
        const code = weather.id;
        let icon = WeatherIcons[code].icon;
        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)){
            icon = 'day-'+ icon;
        }
        icon = "weather-icon wi wi-" + icon;

        return (
            <Current key={dt} name={city_name} low={currentTempMin}
                high={currentTempMax} temp={currentTemp} humidity={currentHum}
                pressure={currentPres} icon={icon} condition={condition}
                description={description} day={time}/>
        );
    }

    renderWeatherWeek(cityData){
        const listing = cityData.list;

        return listing.map((day) => {
            
            const code = day.weather[0].id;
            let icon = WeatherIcons[code].icon;
            if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)){
                icon = 'day-'+ icon;
            }
            icon = "weather-icon wi wi-" + icon;

            return (
                <DailyWeather
                    key={day.dt}
                    temp={day.main.temp}
                    condition={day.weather[0].main}
                    icon={icon}
                />
            );
        });
    }


    render () {
        return (
            <div>
                <div>{this.props.weather.map(this.renderCurrentWeather)}</div>
                <ul className="list-group col-sm-4">{this.props.weather.map(this.renderWeatherWeek)}</ul>
            </div>
        );
    }
}




function mapStateToProps({ weather }){
    return { weather }; // { weather: weather} ES6 shortcut
}

export default connect(mapStateToProps)(CurrentWeather);
