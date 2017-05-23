import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
    }

    changeColor() {
        this.refs.test.style.color = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
    }

    render() {
        return (<div>
            <h3>组件</h3>
            <p ref="test">
                {this.props.children}
            </p>
            <button onClick={this.changeColor.bind(this)}>改变字体颜色</button>
        </div>)
    }
}