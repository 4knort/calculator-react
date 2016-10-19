import React from 'react';

const NumberButtons = ({ onClick }) => {

  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9' ];
  const buttonObjects = buttons.map( (item, i) => <button onClick= {() => onNumberClick(i + 1)} key={i + 1} className="button-number">{item}</button>)

  const onNumberClick = (number) => onClick(number)


  return (
    <div className="buttons-container">
      {buttonObjects}
      <button onClick= {() => onNumberClick(0)} key={0} className="button-number button-zero">0</button>
    </div>
  )
}

export default NumberButtons;