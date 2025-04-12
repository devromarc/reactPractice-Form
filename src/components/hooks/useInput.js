import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const enteredValueIsValid = validationFn(enteredValue);

  function handleOnchange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleOnBlur() {
    setDidEdit(true);
  }

  return {
    enteredValue,
    didEdit,
    handleOnchange,
    handleOnBlur,
    enteredValueIsValid,
    hasError: didEdit && !enteredValueIsValid,
  };
}
