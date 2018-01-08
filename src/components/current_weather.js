import React from 'react';
import 'weather-icons/css/weather-icons.css';
import { fahrenheit } from '../components/functions';

export default (props) => {
    return (
        <div className='col-xs-6 col-xs-offset-3'>
            <div className='col-xs-8 col-xs-offset-2'><h1>{props.name}</h1></div>
            <div className='left col-xs-4 text-center'>
                <h3>{props.day}</h3>
                <h2>{fahrenheit(props.temp)}&#8457;</h2>
                <i className={props.icon}></i>
                <p>{props.condition}</p>
            </div>
            <div className='right col-xs-7 col-xs-offset-1'>
                    <p>{props.description}</p>
                    <p>{fahrenheit(props.low)}&#8457; - {fahrenheit(props.high)}&#8457;</p>
                    <p>Humidity: {props.humidity}&#37;</p>
                    <p>Pressure: {props.pressure} hPa</p>
            </div>
        </div>
    );
}
