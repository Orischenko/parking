import React from 'react';
import ReactDOM from 'react-dom';
import Parking from './components/Parking';
import { places } from './data';

require('./../sass/style.scss');

ReactDOM.render(
    <Parking parking={ places }/>,
    document.getElementById('parking')
);