import React from 'react'

import { useNavigate } from "react-router-dom";

import "./Button.css";

export const Button = ({ disabled, step, text="Далее", type="submit", id="next-btn" }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(step);
    };
   
    return (
        <button onClick={handleClick} disabled={disabled} type={type} id={id}>
            {text}
        </button>            
    )
}
