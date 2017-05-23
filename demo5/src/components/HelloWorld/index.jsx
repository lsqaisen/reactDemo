import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#f50',
        }
    }

    changeColor() {
        this.setState({
            color: `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`,
        })
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
            <button onClick={this.changeColor.bind(this)}>改变字体颜色</button>
        </div>)
    }
}