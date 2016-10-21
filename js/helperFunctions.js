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

export function onInputChange(e) {

  const numbers = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "0": "0"
  };
  const operations = {
    "+": "+",
    "-": "-",
    "/": "/",
    "*": "*"
  };

  let equal = false;
  let operation = false;

  for (let key in numbers) {
    if(e.key === numbers[key]) {
      this.setState ({
        value: this.state.value.toString() + e.key,
        operation: false
      })
      operation = false
      break
    } else {
      operation = true;
    }
  }
  if(operation) {
    for (let key in operations) {
      if(e.key === operations[key] && !this.state.operation) {

        this.setState ({
          value: this.state.value.toString() + e.key,
          operation: true
        })
        equal = false;

        break
      } else {
        equal = true;
      }
    }
  }
  if (equal) {
    if(e.key === "Enter") {
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
    }
  }
}