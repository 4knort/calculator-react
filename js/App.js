import React, { Component } from 'react';
import InputFields from './components/InputFields';
import CalcButton from './components/CalcButton';

const numberButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const keyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 107, 189, 13, 106, 111, 190, 8];
const charButtons = ['.', '+', '-', '*', '/'];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      value: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearValue = this.clearValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(event) {
    this.setState( {
      value: this.state.value + event.target.value
    })
  }

  handleInputChange(event) {
    this.setState( {
      value: event.target.value
    })
  }

  clearValue() {
    this.setState( {
      value: '',
      result: ''
    })
  }

  onSubmit(event) {
    event.preventDefault();

    try {
      const result = eval(this.state.value);
      if(!isNaN(result) && isFinite(result)) {
        this.setState({ result: result})
      } else {
        this.setState({ result: 'ERROR'})
      }
    } catch(e) {
      this.setState({ result: "ERROR"})
    }
  }

  handleKeyDown(event) {
    const { which } = event;
    if(!keyCodes.some((keyCode) => keyCode === which)) {
      event.preventDefault();
    }
  }


  render() {

    const numbers =  numberButtons.map((button, index) => <CalcButton onClick={this.handleClick} button={button} key={`${index}-number`} />)
    const chars =  charButtons.map((button, index) => <CalcButton onClick={this.handleClick} button={button} key={`${index}-char`} />)
    const { value, result } = this.state;

    return (<div className="calc">
        <InputFields value={value} result={result} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onSubmit={this.onSubmit} />

        <div className="calc__buttons">
          <div className="calc__numbers">
            {numbers}
          </div>
          <div className="calc__chars">
            {chars}
            <CalcButton button="Clear" onClick={this.clearValue} />
            <CalcButton button="=" onClick={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
