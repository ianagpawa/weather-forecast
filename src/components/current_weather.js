import React from 'react';

export default (props) => {
    return (
        <div>
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
                    {props.temp} temp
                </div>
                <div className='lower-right'>
                    <p>{props.low} LOW</p>
                    <p>{props.humidity} Humidity</p>
                    <p>{props.pressure} Pressure</p>
                </div>
            </div>
        </div>
    );
}
