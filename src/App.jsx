import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        First Commit
        {counter}
      </div>
    );
  }
}
