import React from 'react'

import "./Input.css";

export const Input = ({label, type="radio", name="variant", id, placeholder, pattern, errorMessage}) => {
  
  return (
      <label className="input-wrapper" htmlFor={id}>
        {label}
        <input
          required
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          pattern={pattern}
        />
        <span id="error-message">
          {errorMessage}
        </span>
      </label>
  )
}