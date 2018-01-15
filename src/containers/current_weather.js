import React, { Component } from 'react';
import { connect } from 'react-redux';
import Current from "../components/current_weather";
import DailyWeather from "../components/weather";
import Line from '../components/chart';
import { filterFunction, retrieveIcon, fahrenheit, getTime, getFormattedTime, getNext, getHour, convertMToMph } from "../components/functions";

class CurrentWeather extends Component {

    renderCurrentWeather(cityData){
        const city_name = cityData.city.name;
        const listing = cityData.list[0];
        const dt = listing.dt;
        const time = getTime(dt);
        const day = time[0];
        const hour = getHour(time[4]);
        const date = [time[1], time[2] + ",", time[3]].join(" ");

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

        const windSpeed = convertMToMph(listing.wind.speed);

        return (
            <Current key={dt} name={city_name} low={currentTempMin}
                high={currentTempMax} temp={currentTemp} humidity={currentHum}
                pressure={currentPres} icon={icon} condition={condition}
                description={description} day={day} date={date}
                windSpeed={windSpeed} />
        );
    }

    renderWeatherWeek(cityData){
        const listing = cityData.list;

        return listing.filter(day => (filterFunction(day))
                                    ).map((day) => {
            const time = getTime(day.dt);
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
        const temps = cityData.list.map(weather => fahrenheit(weather.main.temp));
        const minimum = getNext( Math.min.apply(null,temps), false);
        const maximum = getNext( Math.max.apply(null,temps), true);

        const labels = cityData.list.map(weather => getFormattedTime(weather.dt));
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "Temperature",
                    data: temps,
                    fill: true
                }
            ]
        }

        const options = {
            responsive: true,
            title: {
                display: true,
                text: 'Temperature Forecast'
            },
            tooltips: {
                mode: 'label'
            },
            hover: {
                mode: 'dataset'
            },
            scales: {
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Hour and Day'
                        }
                    }
                ],
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Temp. (°F)'
                        },
                        ticks: {
                            min: minimum,
                            max: maximum
                        }
                    }

                ]
            }
        }

        return (
            <Line key={"Temperature"} data={data} options={options} />
        )
    }


    render () {
        return (
            <div>
                <div className='col-md-12'>
                    {this.props.weather.map(this.renderCurrentWeather)}
                </div>
                <div className="col-xs-10 col-xs-offset-2">
                    {this.props.weather.map(this.renderWeatherWeek)}
                </div>
                <div className='col-md-12'>
                    {this.props.weather.map(this.renderCharts)}
                </div>
            </div>
        );
    }
}




function mapStateToProps({ weather }){
    return { weather }; // { weather: weather} ES6 shortcut
}

export default connect(mapStateToProps)(CurrentWeather);
