import React, { Component, PropTypes } from 'react';
import Trucks from './Trucks';
import Disableds from './Disableds';
import Sedans from './Sedans';

export default class Parking extends Component{
    static propTypes = {

    };

    state = {
        parking: this.props.parking.length,
        truck: this.props.parking.filter((car) => car.category === 'truck').length,
        disabled: this.props.parking.filter((car) => car.category === 'disabled').length,
        sedan: this.props.parking.filter((car) => car.category === 'sedan').length
    };

    render() {
        const{ parking } = this.props;

        console.log( this.state.sedan );

        return(
            <div>
                { this._getTrucks() }
                { this._getDesibleds() }
                { this._getSedans() }
            </div>
        );
    };

    _getTrucks() {
        const truck = this.props.parking.filter((car) => car.category === 'truck');

        return(
            <Trucks trucks={ truck }/>
        );
    }

    _getDesibleds() {
        const disabled = this.props.parking.filter((car) => car.category === 'disabled');

        return(
            <Disableds disableds={ disabled }/>
        );
    }

    _getSedans() {
        const sedan = this.props.parking.filter((car) => car.category === 'sedan');

        return(
            <Sedans sedans={ sedan }/>
        );
    }
}