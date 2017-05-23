import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './button';
import Content from './content';
import Title from './title';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: false,
        }
    }

    changeSwitch() {
        this.setState({
            switch: !this.state.switch,
        })
    }

    render() {
        const boxStyle = {
            float: 'left',
            width: '50%',
            height: '100px',
        }
        return (<div>
            <Title>组件</Title>
            <Content >{this.state.switch ? '组件1' : '组件2' }：{this.props.children}</Content>
            <Button onClick={this.changeSwitch.bind(this)}>切换组件</Button>
        </div>)
    }
}