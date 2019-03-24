import React, { Component } from 'react';

export default class IndexPage extends Component {
  state = {
    response: {},
  };
  async componentDidMount() {
    const response = await (await fetch('/ping')).json();
    this.setState({ response });
  }

  render() {
    return (
      <div>
        <p>Welcome to next.js!</p>
        <p>{this.state.response.greeting}</p>
        <p>
          <pre>{JSON.stringify(this.state.response, undefined, 2)}</pre>
        </p>
      </div>
    );
  }
}
