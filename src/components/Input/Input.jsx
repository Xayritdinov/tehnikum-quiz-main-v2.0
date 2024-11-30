import React from 'react'

import "./Input.css";

export const Input = ({label, type="radio", name="variant", id, placeholder, pattern, errorMessage, ...props}) => {
  
  return (
      <label className="input-wrapper" htmlFor={id}>
        {label}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          pattern={pattern}
          required
          {...props}
        />
        <span id="error-message">{errorMessage}</span>
      </label>
  )
}