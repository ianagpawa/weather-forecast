import React from 'react';

function fahrenheit(temp){
    return Math.round(((9/5) * (parseInt(temp, 10) - 273)) + 32);
}

export default (props) => {
    return (
        <div className='col-xs-4 col-xs-offset-4'>
            <div className='col-xs-12'><h1>{props.name}</h1></div>
            <div className='left col-xs-4'>
                <div className='icon'>
                    Icon
                </div>
                <div className='condition'>
                    Condition
                </div>
            </div>
            <div className='right col-xs-8'>
                <div className='temp'>
                    {fahrenheit(props.temp)}&#8457;
                </div>
                <div className='lower-right'>
                    <p>{fahrenheit(props.low)}&#8457; - {fahrenheit(props.high)}&#8457;</p>
                    <p>{props.humidity} Humidity</p>
                    <p>{props.pressure} Pressure</p>
                </div>
            </div>
        </div>
    );
}
