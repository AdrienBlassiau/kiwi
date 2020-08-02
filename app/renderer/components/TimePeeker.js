import React, { useState, useEffect, useRef } from 'react';

const TimePeeker = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const [value, setValue] = useState(['0', '0', '0', '0', '0', '0', '0', '0']);
  const [input, setInput] = useState(null);
  const [focus, setFocus] = useState(0);
  const inputRef = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const isNumber = (value) => {
    const number = Number(value);
    console.log('number tested:', number);
    return !isNaN(number);
  };

  const validateTimeAndCursor = (value = '', cursorPosition = 0) => {
    let newCursorPosition = Number(cursorPosition);
    let validatedValue = value;
    return validatedValue;
  };

  const onInputChange = (event, position, callback) => {
    const inputEl = event.target;
    const inputValue = inputEl.value;
    const oldValue = value[position];

    const cursorPosition = inputEl.selectionEnd || 0;
    const isTyped = inputValue.length > oldValue.length;
    const cursorCharacter = inputValue[cursorPosition - 1];
    const addedCharacter = isTyped ? cursorCharacter : null;
    const removedCharacter = isTyped ? null : oldValue[cursorPosition];
    const replacedSingleCharacter =
      inputValue.length === oldValue.length ? oldValue[cursorPosition - 1] : null;
    console.log(
      'inputValue:',
      inputValue,
      'oldValue:',
      oldValue,
      ',position:',
      position,
      'isTyped:',
      isTyped,
      'end:',
      inputEl.selectionEnd,
      'cursorPosition:',
      cursorPosition,
      'addedCharacter:',
      addedCharacter,
    );

    if (isNumber(addedCharacter) && addedCharacter !== null && addedCharacter !== ' ') {
      // console.log("inputValue:",inputValue,",position:",position,"end:",inputEl.selectionEnd)
      const pos = inputEl.selectionEnd == 2 ? 1 : inputEl.selectionEnd == 1 ? 0 : 1;
      console.log('pos:', pos);
      const validatedTime = validateTimeAndCursor(inputValue, position);
      console.log('validatedTime[pos]', validatedTime[pos]);

      const newValue = value.slice();
      newValue[position] = validatedTime[pos];
      setValue(newValue);
      console.log('value:', newValue, 'focus:', focus, position === 7 ? 7 : position + 1);
      setFocus(position === 7 ? 7 : position + 1);
      // setInputEl([inputEl,validatedCursorPosition])

      // callback(event, validatedTime);
      inputRef.current[position === 7 ? 7 : position + 1].current.focus();
      event.persist();
    }
  };

  const onChange = (event, value) => console.log(event, value);

  const inputizer = (position) => {
    return (
      <input
        type="text"
        ref={inputRef.current[position]}
        value={value[position] || ''}
        onChange={(event) => onInputChange(event, position, (e, v) => onChange && onChange(e, v))}
        autoFocus={position === focus}
        style={{ width: 10, textAlign: 'center' }}
      />
    );
  };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////  COMPONENTS  ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      {inputizer(0)}
      {inputizer(1)}:{inputizer(2)}
      {inputizer(3)}:{inputizer(4)}
      {inputizer(5)}:{inputizer(6)}
      {inputizer(7)}
    </div>
  );
};

export default TimePeeker;
