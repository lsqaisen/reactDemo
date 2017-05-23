import React, { Component } from 'react';

import Button from './button';
import Content from './content';
import Title from './title';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color_1: '#f50',
            color_2: '#f50',
        }
    }

    changeColorByStateName(stateName) {
        this.setState({
            [stateName]: `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`,
        })
    }

    render() {
        const pstyle_1 = {
            color: this.state.color_1,
        }
        const pstyle_2 = {
            color: this.state.color_2,
        }
        const boxStyle = {
            float: 'left',
            width: '50%',
            height: '100px',
        }
        return (<div>
            <Title>组件重用</Title>
            <div style={boxStyle}>
                <Content style={pstyle_1}>组件内容1： {this.props.children}</Content>
                <Button onClick={this.changeColorByStateName.bind(this, 'color_1')}>改变组件内容1字体颜色</Button>
            </div>
            <div style={boxStyle}>
                <Content style={pstyle_2}>组件内容2： {this.props.children}</Content>
                <Button onClick={this.changeColorByStateName.bind(this, 'color_2')}>改变组件内容2字体颜色</Button>
            </div>
        </div>)
    }
}