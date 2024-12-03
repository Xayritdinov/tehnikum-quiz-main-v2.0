import React, { useState } from "react";
import { Button, Input } from "../components";

export const StepOne = () => {

  const [isNameValid, setIsNameValid] = useState(false)

  const isDisabled = !(isNameValid)
  
  const onNameInputHandler = e => {
    const value = e.target.value.trim()
    if (value.length < 2) {
      setIsNameValid(false)
      return
    }
    setIsNameValid(true)
  }

  return (    
        <div className="single-input-quiz">
          <form className="question">
            <h2>1. Занимательный вопрос</h2>
            <Input type="text" name="answer" placeholder="Ваш ответ" errorMessage="Введите ответ в правильном формате" onInput={onNameInputHandler}/>
            <Button step="/step/2" disabled={isDisabled} />            
          </form>
        </div>      
  );
};
