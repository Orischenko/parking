import React, { Component, PropTypes } from 'react';
import Disabled from './Disabled';

export default class Disableds extends Component{
    static propTypes = {

    };

    render() {
        const{ disableds, handleStateChange } = this.props;

        const disabledElements = disableds.slice(0, handleStateChange).map((disabled) => {
            return(
                <li key={ disabled.id } className={ disabled.class }><Disabled /></li>
            );
        });

        const emptyPlaces = disableds.map((place) => {
            return(
                <li key={ place.id }></li>
            );
        });

        return(
            <div className="disableds">
                <h5>Disable parking ({ handleStateChange })</h5>
                <ul>
                    { disabledElements }
                </ul>
                <ul>
                    { emptyPlaces }
                </ul>
            </div>
        );
    };
}