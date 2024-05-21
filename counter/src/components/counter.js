import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  onDecrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  onIncrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  onReset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h4>{this.state.count}</h4>
        <button onClick={this.onIncrease}>Increse</button>
        <button onClick={this.onDecrease}>Decrease</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
