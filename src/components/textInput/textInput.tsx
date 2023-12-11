import React from 'react'
import { ChangeEventHandler } from "react";
import { TextInputStyles } from './textInput.styles';

type InputProps = {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  inputRef?: React.RefObject<HTMLInputElement>;
};


const textInput = ({ placeholder, type, value, name, handleChange, inputRef }: InputProps) => {
  return <TextInputStyles placeholder={placeholder} type={type} value={value} name={name} onChange={handleChange} ref={inputRef} />
}

export default textInput