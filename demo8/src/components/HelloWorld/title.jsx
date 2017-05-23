import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3 {...this.props}>{this.props.children}</h3>
        )
    }
}

export default Content