import React from "react";

import { Button, Li, Progress, Ul } from "../components";

export const StepTwo = () => {

  const answers = ["Ваш ответ 1", "Ваш ответ 2", "Ваш ответ 3", "Ваш ответ 4"]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <Progress active={0}/>          
          <form className="question">
            <h2>1. Занимательный вопрос</h2>
            <Ul className="variants">             
              {answers.map((answer, index) => (
                <Li key={index} text={answer} name={`variant-${index + 1}`} id={`variant-${index + 1}`} />
              ))}
            </Ul>            
            <Button step="/step-three" />
          </form>
        </div>
      </div>
    </div>
  );
};