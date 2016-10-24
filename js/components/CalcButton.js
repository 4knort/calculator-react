import React from 'react';

const CalcButton = ({ button, onClick }) => (
  <input className="calc__button" type="button" value={button} onClick={onClick} />
);

export default CalcButton;

