import React from 'react';
import 'weather-icons/css/weather-icons.css';
import { fahrenheit } from './functions';
import DailyWeather from './weather';


export default (props) => {
    const size = "left col-xs-4 text-center";
    return (
        <div className='col-xs-6 col-xs-offset-3'>
            <div className='col-xs-8 col-xs-offset-2'><h1>{props.name}</h1></div>
            <DailyWeather
                size={size}
                weekday={props.day}
                temp={props.temp}
                condition={props.condition}
                icon={props.icon}
            />
            <div className='right col-xs-7 col-xs-offset-1'>
                    <p>{props.description}</p>
                    <p>{fahrenheit(props.low)}&#8457; - {fahrenheit(props.high)}&#8457;</p>
                    <p>Humidity: {props.humidity}&#37;</p>
                    <p>Pressure: {props.pressure} hPa</p>
            </div>
        </div>
    );
}
