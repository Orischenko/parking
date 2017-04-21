import React, { Component, PropTypes } from 'react';
import Trucks from './Trucks';
import Disableds from './Disableds';
import Sedans from './Sedans';
import Message from './Message';

// Without data.js

// let parkingPlaces = [
//     {type: 'truck', count: 5},
//     {type: 'sedan', count: 20},
//     {type: 'disabled', count: 5}
// ];
//
// let parking = [];
//
// parkingPlaces.forEach(place => {
//     for (let i = 0; i < place.count; i++) {
//         parking.push({
//             category: place.type,
//             id: i,
//         })
//     }
// });

export default class Parking extends Component{
    static propTypes = {

    };

    state = {
        truck: this.props.parking.filter((car) => car.category === 'truck').length,
        disabled: this.props.parking.filter((car) => car.category === 'disabled').length,
        sedan: this.props.parking.filter((car) => car.category === 'sedan').length,
        message: ''
    };

    render() {
        return(
            <div>
                <h3>Parking</h3>
                { this._getMessage() }
                { this._getTruckBtn() }
                { this._getDisabledBtn() }
                { this._getSedanBtn() }

                <div className="places">
                    { this._getTrucksPlaces() }
                    { this._getDesibledsPlaces() }
                    { this._getSedansPlaces() }
                </div>
            </div>
        );
    };

    _getMessage() {
        return(
            <Message message={ this.state.message }/>
        );
    }

    _getTrucksPlaces() {
        const places = this.props.parking.filter((car) => car.category === 'truck');

        return(
            <Trucks
                trucks={ places }
                handleStateChange={ this.state.truck }
            />
        );
    }

    _getDesibledsPlaces() {
        const places = this.props.parking.filter((car) => car.category === 'disabled');

        return(
            <Disableds
                disableds={ places }
                handleStateChange={ this.state.disabled }
            />
        );
    }

    _getSedansPlaces() {
        const places = this.props.parking.filter((car) => car.category === 'sedan');

        return(
            <Sedans
                sedans={ places }
                handleStateChange={ this.state.sedan }
            />
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
            truck: this.state.truck ? this.state.truck - 1 : 0,
            message: !this.state.truck ? 'Parking for trucks full' : ''
        });
    };

    _handleDisabledClick = (event) => {
        event.preventDefault();

        if(this.state.disabled) {
            this.setState({
                disabled: this.state.disabled ? this.state.disabled - 1 : 0
            });
        }

        if(!this.state.disabled && this.state.truck) {
            this.setState({
                truck: this.state.truck ? this.state.truck - 1 : 0
            });
        }

        if(!this.state.disabled && !this.state.truck && this.state.sedan) {
            this.setState({
                sedan: this.state.sedan ? this.state.sedan - 1 : 0
            });
        }

        if(!this.state.disabled && !this.state.truck && !this.state.sedan) {
            this.setState({
                message: 'Parking for disabled full'
            });
        }
    };

    _handleSedanClick = (event) => {
        event.preventDefault();

        if(this.state.sedan) {
            this.setState({
                sedan: this.state.sedan ? this.state.sedan - 1 : 0
            });
        }

        if(!this.state.sedan && this.state.truck) {
            this.setState({
                truck: this.state.truck ? this.state.truck - 1 : 0
            });
        }

        if(!this.state.sedan && !this.state.truck) {
            this.setState({
                message: 'Parking for sedan full'
            });
        }
    }
}