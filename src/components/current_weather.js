import React from 'react';
import 'weather-icons/css/weather-icons.css';
import { fahrenheit } from './functions';
import DailyWeather from './weather';


export default (props) => {
    const size = "left col-md-6";
    return (
        <div className='col-md-6 col-md-offset-3 text-center'>
            <div className='col-md-12'><h1>{props.name}</h1></div>
            <DailyWeather
                size={size}
                weekday={props.day}
                temp={props.temp}
                condition={props.condition}
                icon={props.icon}
            />
            <div className='right col-md-6'>
                    <p>{props.description}</p>
                    <p>{fahrenheit(props.low)}&#8457; - {fahrenheit(props.high)}&#8457;</p>
                    <p>Humidity: {props.humidity}&#37;</p>
                    <p>Pressure: {props.pressure} hPa</p>
            </div>
        </div>
    );
}
