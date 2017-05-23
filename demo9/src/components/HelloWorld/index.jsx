import React, { Component } from 'react';

import Button from './button';
import Content from './content';
import Title from './title';

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
            <Title>组件</Title>
            <Content style={pstyle}>{this.props.children}</Content>
            <Button onClick={this.changeColor.bind(this)}>改变字体颜色</Button>
        </div>)
    }
}