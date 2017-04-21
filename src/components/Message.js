import React, { Component } from 'react';

export default class Message extends Component{
    render() {
        const{ message } = this.props;

        return(
            <div className="message">
                <p>{ message }</p>
            </div>
        );
    }
}