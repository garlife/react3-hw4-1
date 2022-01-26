import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    count: 0
  }

  render(){
    return(
      <>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
        <button onClick={() => this.handleReser()}>Reset</button>
        <h3>{this.state.count}</h3>
      </>
    )
  }

  handleIncrement(){
    this.setState((prevState) => ({count: prevState.count + 1}))
  }

  handleDecrement(){
    this.setState((prevState) => ({count: prevState.count - 1}))
  }

  handleReser(){
    this.setState((prevState) => ({count: 0}))
  }
}

export default App;
