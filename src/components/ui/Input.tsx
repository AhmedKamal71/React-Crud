// import React from 'react'

import { InputHTMLAttributes } from "react";

interface Input extends InputHTMLAttributes<HTMLInputElement> {}
function Input({ ...rest }: Input) {
  return (
    <input
      {...rest}
      className="border-2 border-gray-300 p-2 rounded-md focus:border-indigo-400 focus:outline-none shadow-md my-2"
    />
  );
}

export default Input;
