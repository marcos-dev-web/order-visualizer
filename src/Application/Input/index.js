import React, { useState } from 'react';

import './styles.css';

function Input({changeValueInput}) {
  const [valueInput, setValueInput] = useState('');

  const validKeys = ('1234567890'.split('').concat(["null"]))

  function handleInputValue(event) {
    const key = event.nativeEvent.data;
    let value = event.target.value.toLowerCase();

    if (value.match(/[a-z]/g)) {
      value = value.split('').filter(v => '1234567890'.indexOf(v) !== -1).join('');
      changeValueInput(value);
      return setValueInput(value);
    }

    if (value.length > 3) {
      let v = value.trim().slice(0, 3);
      changeValueInput(v);
      return setValueInput(v);
    }

    if (!validKeys.some(k => k === String(key))) {
      return event.preventDefault();
    } else {
      if (key === null) {
        changeValueInput(value);
        return setValueInput(value);
      }else if (valueInput.length < 3) {
        changeValueInput(value);
        return setValueInput(value);
      }
    }
  }

  return (
    <input
      className="input_length"
      type="text"
      placeholder="length array"
      required
      value={valueInput}
      onChange={handleInputValue}
    />
  )
}

export default Input;