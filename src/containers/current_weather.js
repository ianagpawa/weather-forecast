import React, { Component } from 'react';
import { connect } from 'react-redux';
import timestamp from 'unix-timestamp';
import Current from "../components/current_weather";
import DailyWeather from "../components/weather";
import Chart from "../components/sparklines";
import { filterFunction, retrieveIcon } from "../components/functions";

class CurrentWeather extends Component {

    renderCurrentWeather(cityData){
        const city_name = cityData.city.name;
        const listing = cityData.list[0];
        const dt = listing.dt;
        const time = timestamp.toDate(dt).toString().split(" ");
        const day = time[0];
        const hour = parseInt(time[4].slice(0,2), 10);

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
        const icon = "weather-icon wi wi-" + retrieveIcon(hour, code);

        return (
            <Current key={dt} name={city_name} low={currentTempMin}
                high={currentTempMax} temp={currentTemp} humidity={currentHum}
                pressure={currentPres} icon={icon} condition={condition}
                description={description} day={day}/>
        );
    }

    renderWeatherWeek(cityData){
        const listing = cityData.list;

        return listing.filter(day => (filterFunction(day))
                                    ).map((day) => {
            const time = timestamp.toDate(day.dt).toString().split(" ");
            const weekday = time[0];
            const code = day.weather[0].id;
            const icon = "weather-icon wi wi-" + retrieveIcon(12, code);
            const size = "daily-weather col-xs-2";
            return (
                <DailyWeather
                    key={day.dt}
                    size = {size}
                    weekday={weekday}
                    temp={day.main.temp}
                    condition={day.weather[0].main}
                    icon={icon}
                />
            );

        });
    }

    renderCharts(cityData){
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);


    }


    render () {
        return (
            <div>
                <div className='col-md-12'>{this.props.weather.map(this.renderCurrentWeather)}</div>
                <div className="col-xs-10 col-xs-offset-2">{this.props.weather.map(this.renderWeatherWeek)}</div>
            </div>
        );
    }
}




function mapStateToProps({ weather }){
    return { weather }; // { weather: weather} ES6 shortcut
}

export default connect(mapStateToProps)(CurrentWeather);
