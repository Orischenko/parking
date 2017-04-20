import React, { Component, PropTypes } from 'react';
import Sedan from './Sedan';

export default class Sedans extends Component{
    static propTypes = {

    };

    render() {
        const{ sedans } = this.props;

        const sedanElements = sedans.map((sedan) => {
            return(
                <li key={ sedan.age }><Sedan sedan={ sedan }/></li>
            );
        });

        return(
            <ul className="sedans">
                { sedanElements }
            </ul>
        );
    };
}