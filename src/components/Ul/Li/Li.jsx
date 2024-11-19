import React from 'react'

export const Li = ({text, name, id, img=false, src, alt }) => {
  
  return (
        <li className="variant-wrapper">
            <input required type="radio" name={name} id={id} />
            <label htmlFor={id}>
                {img && src && <img src={src} alt={alt} />}
                {text}
            </label>
        </li>
  )
}
