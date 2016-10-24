import React from 'react';

const InputFields = ({ value, result, onSubmit, onChange, onKeyDown }) => {
  return (<div>
      <div className="calc__result">
        <span>Result: </span>
        <span>{result}</span>
      </div>

      <form onSubmit={onSubmit}>
        <input className="calc__input" value={value} onChange={onChange} onKeyDown={onKeyDown} />
      </form>
    </div>)
}

export default InputFields;