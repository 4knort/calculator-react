import React from 'react';

const FunctionsButtons = ({ onClick, buttonFunction }) => {
  const buttons = ['+', '-', '*', '/'];
  const buttonObjects = buttons.map((item, i) => <button onClick= {() => onClick(item)} key={i} className="button-number">{item}</button>)

  return (
    <div>
      {buttonObjects}
      <button onClick= {() => buttonFunction("clear")} className="button-number">Clear</button>
      <button onClick= {() => buttonFunction("delete")} className="button-number">←</button>
      <button onClick= {() => buttonFunction("equal")} className="button-number">=</button>
    </div>
  )
}

export default FunctionsButtons;





