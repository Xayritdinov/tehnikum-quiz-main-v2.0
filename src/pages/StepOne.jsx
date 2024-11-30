import React from "react";

import { Button, Input, Progress } from "../components";

export const StepOne = () => {

  return (    
        <div className="single-input-quiz">
          <Progress activeStep={1} />
          <form className="question">
            <h2>1. Занимательный вопрос</h2>
            <Input type="text" name="answer" placeholder="Ваш ответ" errorMessage="Введите ответ в правильном формате"/>
            <Button step="/step/2" />            
          </form>
        </div>      
  );
};
