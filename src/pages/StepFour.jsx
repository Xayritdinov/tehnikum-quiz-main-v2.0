import React from "react";

import { Button, Li, Ul, Progress } from "../components";

export const StepFour = () => {

  const answers = [1, 2, 3, 4, 5]

  return (    
        <div className="emoji-quiz">
          <Progress activeStep={4} />        
          <form className="question">
            <h2>4. Занимательный вопрос</h2>
            <Ul className="level-variants">
              {answers.map((answer, index) => (
                <Li key={index} text={answer} name={`variant-${index + 1}`} id={`variant-${index + 1}`} />
              ))}              
            </Ul>                
            <Button step="/thanks" />
          </form>
        </div>     
  );
};
