import React from 'react';

const FunctionsButtons = ({}) => {
  const buttons = ['+', '-', '*', '/', 'Clear', '←', '='];
  const buttonObjects = buttons.map((item, i) => <button key={i} className="button-number">{item}</button>) 

  return (
    <div >
      {buttonObjects}
    </div>
  )
}

export default FunctionsButtons;