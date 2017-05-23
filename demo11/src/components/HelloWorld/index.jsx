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
        this.state.switch ? ReactDOM.unmountComponentAtNode(document.getElementById('comp1')) : ReactDOM.unmountComponentAtNode(document.getElementById('comp2'));
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
            {this.state.switch ? <Content id='comp1'>组件1：{this.props.children}</Content> : <Title id="comp2">组件2：{this.props.children}</Title>}
            <Button onClick={this.changeSwitch.bind(this)}>切换组件</Button>
        </div>)
    }
}