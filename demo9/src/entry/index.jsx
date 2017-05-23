import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from '../components';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HelloWorld>第一个组件：  Hello World 1111!</HelloWorld>
                <HelloWorld>另一个组件：  Hello World 2222!</HelloWorld>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));