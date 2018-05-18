import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    render() {
        return <div>First Commit {this.state.counter}</div>;
    }
}
