import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        alert('你正在切换组件，当前组件将被销毁');
    }

    componentDidMount() {
        alert('新的组件已装载完成');
    }

    render() {
        return (
            <p {...this.props}>{this.props.children}</p>
        )
    }
}

export default Content