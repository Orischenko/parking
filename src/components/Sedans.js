import React, { Component, PropTypes } from 'react';
import Sedan from './Sedan';

export default class Sedans extends Component{
    static propTypes = {

    };

    render() {
        const{ sedans, handleStateChange } = this.props;

        const sedanElements = sedans.slice(0, handleStateChange).map((sedan) => {
            return(
                <li key={ sedan.id }><Sedan /></li>
            );
        });

        const emptyPlaces = sedans.map((place) => {
            return(
                <li key={ place.id }></li>
            );
        });

        return(
            <div className="sedans">
                <h5>Sedans parking ({ handleStateChange })</h5>
                <ul>
                    { sedanElements }
                </ul>
                <ul>
                    { emptyPlaces }
                </ul>
            </div>
        );
    };
}