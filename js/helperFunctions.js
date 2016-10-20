export function onNumberClick(symbol) {
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

export function onFunctionClick(operation) {
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
      if(eval(this.state.value).toString() === "Infinity") {
        alert("division by zero in undefined")
        this.setState({
          value: ""
        })
      } else {
        this.setState({
          value: eval(this.state.value).toString()
        })
      }
      break;
    }
  }
}