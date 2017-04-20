import React, { Component, PropTypes } from 'react';
import Disabled from './Disabled';

export default class Disableds extends Component{
    static propTypes = {

    };

    render() {
        const{ disableds } = this.props;

        const disabledElements = disableds.map((disabled, i) => {
            return(
                <li key={ disabled.age }><Disabled disabled={ disabled }/></li>
            );
        });

        return(
            <ul className="disableds">
                { disabledElements }
            </ul>
        );
    };
}