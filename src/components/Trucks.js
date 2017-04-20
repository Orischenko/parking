import React, { Component, PropTypes } from 'react';
import Truck from './Truck';

export default class Trucks extends Component{
    static propTypes = {

    };

    render() {
        const{ trucks } = this.props;

        const truckElements = trucks.map((truck, i) => {
            return(
                <li key={ truck.age }><Truck truck={ truck }/></li>
            );
        });

        return(
            <ul className="trucks">
                { truckElements }
            </ul>
        );
    };
}