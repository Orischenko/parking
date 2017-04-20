import React, { Component, PropTypes } from 'react';
import Trucks from './Trucks';
import Disableds from './Disableds';
import Sedans from './Sedans';

export default class Parking extends Component{
    static propTypes = {

    };

    state = {
        truck: this.props.parking.filter((car) => car.category === 'truck').length,
        disabled: this.props.parking.filter((car) => car.category === 'disabled').length,
        sedan: this.props.parking.filter((car) => car.category === 'sedan').length
    };

    render() {
        return(
            <div>
                { this._getTruckBtn() }
                { this._getDisabledBtn() }
                { this._getSedanBtn() }

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

    _getTruckBtn() {
        return(
            <button onClick={ this._handleTruckClick }>Truck</button>
        );
    }

    _getDisabledBtn() {
        return(
            <button onClick={ this._handleDisabledClick }>Disabled</button>
        );
    }

    _getSedanBtn() {
        return(
            <button onClick={ this._handleSedanClick }>Sedan</button>
        );
    }

    _handleTruckClick = (event) => {
        event.preventDefault();

        this.setState({
            truck: this.state.truck ? this.state.truck - 1 : 0

        }, () => {

            if(this.state.truck) {
                console.log( '---', 'заехал truck, осталось мест', this.state.truck );

            }else {
                console.log( '---', 'для truck на парковке мест нет' );
            }
        });
    };

    _handleDisabledClick = (event) => {
        event.preventDefault();

        if(this.state.disabled) {
            this.setState({
                disabled: this.state.disabled ? this.state.disabled - 1 : 0

            }, () => {

                console.log( '---',
                    'заехал disabled, осталось disabled мест', this.state.disabled,
                    'осталось truck мест', this.state.truck,
                    'осталось sedan мест', this.state.sedan
                );

            });
        }

        if(!this.state.disabled && this.state.truck) {
            this.setState({
                truck: this.state.truck ? this.state.truck - 1 : 0

            }, () => {

                console.log( '---',
                    'заехал disabled, осталось disabled мест', this.state.disabled,
                    'осталось truck мест', this.state.truck,
                    'осталось sedan мест', this.state.sedan
                );

            });
        }

        if(!this.state.disabled && !this.state.truck && this.state.sedan) {
            this.setState({
                sedan: this.state.sedan ? this.state.sedan - 1 : 0

            }, () => {

                console.log( '---',
                    'заехал disabled, осталось disabled мест', this.state.disabled,
                    'осталось truck мест', this.state.truck,
                    'осталось sedan мест', this.state.sedan
                );

            });
        }

        if(!this.state.disabled && !this.state.truck && !this.state.sedan) {
            console.log( '---', 'на парковке мест нет' );
        }
    };

    _handleSedanClick = (event) => {
        event.preventDefault();

        if(this.state.sedan) {
            this.setState({
                sedan: this.state.sedan ? this.state.sedan - 1 : 0

            }, () => {

                console.log( '---',
                    'заехал sedan, осталось sedan мест', this.state.sedan,
                    'осталось truck мест', this.state.truck
                );

            });
        }

        if(!this.state.sedan && this.state.truck) {
            this.setState({
                truck: this.state.truck ? this.state.truck - 1 : 0

            }, () => {

                console.log( '---',
                    'заехал sedan, осталось sedan мест', this.state.sedan,
                    'осталось truck мест', this.state.truck
                );

            });
        }

        if(!this.state.sedan && !this.state.truck) {
            console.log( '---', 'на парковке мест нет' );
        }
    }
}