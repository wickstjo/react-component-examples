import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default ({ data, header, fallback='Data object is empty.' }) => {
    switch(data.length) {

        // NO TASKS FOUND
        case 0: { return (
            <Fragment>
                <div id={ 'header' }>{ header } ({ data.length })</div>
                <div id={ 'container' }>
                    <div id={ 'fallback' }>{ fallback }</div>
                </div>
            </Fragment>
        )}

        // OTHERWISE, LOOP OUT SELECTORS
        default: { return (
            <Fragment>
                <div id={ 'header' }>{ header } ({ data.length })</div>
                <div id={ 'container' }>
                    { data.map((value, index) =>
                        <Link to={ value[1] } key={ index }>
                            <div id={ 'row' }>{ value[0] }</div>
                        </Link>
                    )}
                </div>
            </Fragment>
        )}
    }
}