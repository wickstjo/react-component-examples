import React, { Fragment } from 'react';

export default ({ header }) => { return (
    <Fragment>
        <div id={ 'header' }>{ header }</div>
        <div id={ 'container' }>
            Foo
        </div>
    </Fragment>
)}