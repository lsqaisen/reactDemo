import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#f50',
            text: '',
        }
        this.time = 5;
        this.handle = null;
    }

    changeColor(callback) {
        this.setState({
            color: `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`,
        }, () => { !!callback && callback() })
    }

    changeText() {
        this.setState({
            text: `组件加载完成，即将在 ${this.time} 秒后更新字体颜色`,
        })
        this.time--;
    }

    componentDidMount() {
        this.changeText();
        this.handle = setInterval(() => {
            if (this.time > 0)
                this.changeText();
            else {
                this.changeColor(() => {
                    clearInterval(this.handle);
                    this.setState({
                        text: `字体颜色已经更新`,
                    })
                });
            }
        }, 1000)
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
            <p>{this.state.text}</p>
        </div>)
    }
}