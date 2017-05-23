import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#f50',
        }
    }

    render() {
        const pstyle = {
            color: this.state.color,
        }
        return (<div>
            <h3>组件</h3>
            <p style={pstyle}>
                {this.props.children}
            </p>
        </div>)
    }
}