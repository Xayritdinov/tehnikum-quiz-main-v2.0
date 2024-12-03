import React, { useState } from "react";
import { Button, Li, Ul } from "../components";

export const StepThree = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const answers = [
    { 
      answer: "Ваш ответ 1", imgSrc: "/img/laugh.png", imgAlt: "laugh"
    }, 
    {      
      answer: "Ваш ответ 2", imgSrc: "/img/hearts.png", imgAlt: "hearts"
    }, 
    {     
      answer: "Ваш ответ 3", imgSrc: "/img/smirk.png", imgAlt: "smirk"
    }, 
    {      
      answer: "Ваш ответ 4", imgSrc: "/img/fright.png", imgAlt: "fright"
    },    
  ]

  const handleOptionChange = () => {
    setIsDisabled(false);
  };

  return (   
        <div className="emoji-quiz">
          <form className="question"> <br/><br/>
            <h2>3. Занимательный вопрос</h2>
            <Ul className="emoji-variants">
              {answers.map((answer, index) => (
                <Li key={index} text={<p>{answer.answer}</p>} img src={answer.imgSrc} alt={answer.imgAlt} name="variant" id={`variant-${index + 1}`} onChange={handleOptionChange} />
              ))}
            </Ul>           
            <Button step="/step/4" disabled={isDisabled} />
          </form>
        </div>      
  );
};
