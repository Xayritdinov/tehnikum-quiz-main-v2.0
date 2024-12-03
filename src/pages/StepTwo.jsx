import React, { useState } from "react";
import { Button, Li, Ul } from "../components";

export const StepTwo = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const answers = ["Ваш ответ 1", "Ваш ответ 2", "Ваш ответ 3", "Ваш ответ 4"]
  
  const handleOptionChange = () => {
    setIsDisabled(false);
  };

  return (    
        <div className="variants-quiz">
          <form className="question">
            <h2>1. Занимательный вопрос</h2>
            <Ul className="variants">
              {answers.map((answer, index) => (
                <Li key={index} text={answer} name="variant" id={`variant-${index + 1}`} onChange={handleOptionChange} />
              ))}
            </Ul>            
            <Button step="/step/3" disabled={isDisabled} />
          </form>
        </div>     
  );
};
