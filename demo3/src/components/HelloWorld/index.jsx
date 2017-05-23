import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <h3>组件</h3>
            {this.props.children}
        </div>)
    }
}