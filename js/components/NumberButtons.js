import React from 'react';

const NumberButtons = ({}) => {
  const buttons = [];

  for(var i = 0; i<10; i++) {
    var x = <button key={i} className="button-number">{i}</button>;
    buttons.push(x);
  }

  return (
    <div className="buttons-container">
      {buttons}
    </div>
  )
}

export default NumberButtons;