import React from 'react';

const InputField = ({ value, onChange }) => {
  return (
    <input autoFocus={true} value={value} onKeyPress={onChange} className="input-field" />

  )
}

export default InputField;