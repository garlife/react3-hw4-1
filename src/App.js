import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrement() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  }

  handleDecrement() {
    this.setState((prevState, props) => ({
      count: prevState.count - 1
    }));
  }

  handleReset() {
    this.setState(() => ({
      count: 0
    }));
  }

  render() {
    return (
      <div style={{display: "flex", justifyContent: "center", padding: "100px"}}>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
        <button onClick={this.handleReset}>reset</button>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

export default App;
