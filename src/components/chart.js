import React from 'react';
import { Line } from 'react-chartjs';

export default (props) => {
    return (
        <Line data={props.data} options={props.options} />
    )
}
