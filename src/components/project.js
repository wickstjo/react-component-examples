import React from 'react';
import { Link } from 'react-router-dom';

export default ({ header, to }) => { return (
    <div>
        <Link to={ to }>
            <div id={ 'project' }>{ header }</div>
        </Link>
    </div>
)}