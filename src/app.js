import React from 'react';
import ReactDOM from 'react-dom';
import Parking from './components/Parking';
import { cars } from './data';

require('./../sass/style.scss');

ReactDOM.render(
    <Parking parking={ cars }/>,
    document.getElementById('parking')
);