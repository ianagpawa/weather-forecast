import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <h3>{props.measure}</h3>
            <Sparklines height={150} width={200} data={props.data}>
                <SparklinesBars style={{ stroke: props.color }}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Average: {average(props.data)} {props.units}</div>
        </div>
    );
}
