import React from "react";

import { Button, Input, Progress } from "../components";

export const StepOne = () => {

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Progress active={0}/>          
          <form className="question">
            <h2>1. Занимательный вопрос</h2>
            <Input type="text" name="answer" placeholder="Ваш ответ" errorMessage="Введите ответ в правильном формате"/>            
            <Button step="/step-two" />            
          </form>
        </div>
      </div>
    </div>
  );
};
