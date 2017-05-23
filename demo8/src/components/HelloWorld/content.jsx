import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p {...this.props}>{this.props.children}</p>
        )
    }
}

export default Content