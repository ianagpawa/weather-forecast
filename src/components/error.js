import React from 'react';

export default (props) => {
    const isError = props.error;
    const size = "left col-md-6";
    if (isError){
        return (
            <div className='col-md-6 col-md-offset-3 text-center'>
                <h2>Error</h2>
            </div>
        );
    }

}
