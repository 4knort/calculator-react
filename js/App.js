import React, { Component } from 'react';
import InputField from './components/InputField';
import NumberButtons from './components/NumberButtons';
import FunctionsButtons from './components/FunctionsButtons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      operation: false
    };
  }

  onNumberClick(symbol) {
      if(typeof symbol === "number") {

        this.setState ({
        value: this.state.value.toString() + symbol,
        operation: false
        })
      } else {
        if(this.state.operation) {
          return
        }

        this.setState ({
          value: this.state.value.toString() + symbol,
          operation: true
        })
      }

    }

  onFunctionClick(operation) {
    switch(operation) {

      case "clear": {
        this.setState({
          value: ""
        })
        break;
      }

      case "delete": {
        this.setState({
          value: this.state.value.slice(0, this.state.value.length - 1)
        })
        break;
      }

      case "equal": {
        this.setState({
          value: eval(this.state.value).toString()
        })
        break;
      }
    }
  }
  render() {
    return (
      <div className="container app calc">
        <InputField value={this.state.value} />
        <NumberButtons onClick={this.onNumberClick.bind(this)} />
        <FunctionsButtons onClick={this.onNumberClick.bind(this)} buttonFunction={this.onFunctionClick.bind(this)}/>
      </div>
    );
  }
}
