import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/sparklines";
import Line from '../components/chart';


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

        const cData = [12, 19, 3, 5, 2, 3];
        const labels = ['a', 'b', 'c', 'd', 'e', 'f'];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "first",
                    data: cData,
                    fill: false,
                    borderDash: [5,5]
                }
            ]
        }

        const options = {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Line Chart'
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
                            labelString: '°F',
                            fontSize: 20,
                            fontColor: '#b6b6b6'
                        }
                    }
                ],
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 50,
                            fontColor: "#000000"
                        },
                        ticks: {
                            suggestedMin: -10,
                            suggestedMax: 50
                        }
                    }
                ]
            }
        }



        return (
            <div>
            <h3>This</h3>
            <Line data={data} options={options} height={600} width={800}/>
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
            </div>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather }; // { weather: weather} ES6 shortcut
}

export default connect(mapStateToProps)(WeatherList);
