import React, { useState } from "react";
import { Button, Li, Ul } from "../components";

export const StepFour = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const answers = [1, 2, 3, 4, 5]
  const handleOptionChange = () => {
    setIsDisabled(false);
  };

  return (    
        <div className="emoji-quiz">
          <form className="question">
            <h2>4. Занимательный вопрос</h2>
            <Ul className="level-variants">
              {answers.map((answer, index) => (
                <Li key={index} text={answer} name="variant" id={`variant-${index + 1}`} onChange={handleOptionChange} />
              ))}              
            </Ul>                
            <Button step="/thanks" disabled={isDisabled} />
          </form>
        </div>     
  );
};
