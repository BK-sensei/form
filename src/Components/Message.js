import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center bg-success text-white p-5">
                <h2>Congratulation {this.props.email}</h2>
                <h2>your form is submitted !</h2>
            </div>
        );
    }
}

export default Message;