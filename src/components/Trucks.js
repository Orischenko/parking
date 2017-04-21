import React, { Component, PropTypes } from 'react';
import Truck from './Truck';

export default class Trucks extends Component{
    static propTypes = {

    };

    render() {
        const{ trucks, handleStateChange } = this.props;

        const truckElements = trucks.slice(0, handleStateChange).map((truck) => {
            return(
                <li key={ truck.id } className={ truck.class }><Truck /></li>
            );
        });

        const emptyPlaces = trucks.map((place) => {
            return(
                <li key={ place.id }></li>
            );
        });

        return(
            <div className="trucks">
                <h5>Truck parking ({ handleStateChange })</h5>
                <ul>
                    { truckElements }
                </ul>
                <ul>
                    { emptyPlaces }
                </ul>
            </div>
        );
    };
}