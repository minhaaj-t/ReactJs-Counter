import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
