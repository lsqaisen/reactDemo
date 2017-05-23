import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from '../components';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <HelloWorld />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));