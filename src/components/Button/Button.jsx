import React from "react";
import { useNavigate } from "react-router";

import "./Button.css";

export const Button = ({ step, text = "Далее", type = "button", id = "next-btn", ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(step);
  };

  return (
    <button onClick={handleClick} type={type} id={id} {...props}>
      {text}
    </button>
  );
};
