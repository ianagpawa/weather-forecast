import React from 'react';
import 'weather-icons/css/weather-icons.css';

function fahrenheit(temp){
    return Math.round(((9/5) * (parseInt(temp, 10) - 273)) + 32);
}

export default (props) => {
    return (
        <div className='col-xs-6 col-xs-offset-3 text-center'>
            <div className='col-xs-8 col-xs-offset-2'><h1>{props.name}</h1></div>
            <div className='left col-xs-4'>
                <i className={props.icon}></i>
                <p>{props.condition}</p>
            </div>
            <div className='right col-xs-7 col-xs-offset-1'>
                    <p>{fahrenheit(props.temp)}&#8457;</p>
                    <p>{props.description}</p>
                    <p>{fahrenheit(props.low)}&#8457; - {fahrenheit(props.high)}&#8457;</p>
                    <p>Humidity: {props.humidity}&#37;</p>
                    <p>Pressure: {props.pressure} hPa</p>
            </div>
        </div>
    );
}
