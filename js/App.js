import React, { Component } from 'react';
import InputField from './components/InputField';
import NumberButtons from './components/NumberButtons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container app calc">
        <InputField />
        <NumberButtons />
      </div>
    );
  }
}
