import React, { Component } from 'react';
import InputField from './components/InputField';
import NumberButtons from './components/NumberButtons';
import FunctionsButtons from './components/FunctionsButtons';
import {onNumberClick, onFunctionClick} from './helperFunctions.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      operation: false
    };
  }

  render() {
    return (
      <div className="container app calc">
        <InputField value={this.state.value} />
        <NumberButtons onClick={onNumberClick.bind(this)} />
        <FunctionsButtons onClick={onNumberClick.bind(this)} buttonFunction={onFunctionClick.bind(this)}/>
      </div>
    );
  }
}
