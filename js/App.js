import React, { Component } from 'react';
import InputField from './components/InputField';
import NumberButtons from './components/NumberButtons';
import FunctionsButtons from './components/FunctionsButtons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      secondValue: '',
      operation: '',
      operationStart: false
    };
  }

  onNumberClick(number) {
    if (!this.state.operationStart) {
      this.setState ({
        value: parseInt(this.state.value.toString() + number, 10)
      })
    } else {
      this.setState ({
        secondValue: parseInt(this.state.value.toString() + number, 10)
      })
    }
    
  }
  render() {
    return (
      <div className="container app calc">
        <InputField value={this.state.value.toString() + this.state.operation + this.state.secondValue}/>
        <NumberButtons onClick={this.onNumberClick.bind(this)}/>
        <FunctionsButtons />
      </div>
    );
  }
}
