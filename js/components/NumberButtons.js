import React from 'react';

const NumberButtons = ({ onClick }) => {

  const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
  const buttonObjects = buttons.map( (item, i) => <button onClick= {() => onNumberClick(i)} key={i} className="button-number">{item}</button>) 

  const onNumberClick = (number) => onClick(number)


  return (
    <div className="buttons-container">
      {buttonObjects}
    </div>
  )
}

export default NumberButtons;