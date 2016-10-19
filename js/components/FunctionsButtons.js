import React from 'react';

const FunctionsButtons = ({ onClick, buttonFunction }) => {
  const buttons = ['+', '-', '*', '/'];
  const buttonObjects = buttons.map((item, i) => <button onClick= {() => onNumberClick(item)} key={i} className="button-number">{item}</button>)

  const onNumberClick = (number) => onClick(number);
  const onFunctionClick = (operation) => buttonFunction(operation);

  return (
    <div>
      {buttonObjects}
      <button onClick= {() => onFunctionClick("clear")} className="button-number">Clear</button>
      <button onClick= {() => onFunctionClick("delete")} className="button-number">←</button>
      <button onClick= {() => onFunctionClick("equal")} className="button-number">=</button>
    </div>
  )
}

export default FunctionsButtons;





