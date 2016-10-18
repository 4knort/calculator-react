import React from 'react';

const FunctionsButtons = ({}) => {
  const buttons = ['+', '-', '*', '/', 'Clear', '←', '='];
  var buttonObjects = buttons.map((item) => <button className="button-number">{item}</button>) 

  return (
    <div >
      {buttonObjects}
    </div>
  )
}

export default FunctionsButtons;