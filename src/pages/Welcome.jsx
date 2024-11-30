import React, { useState } from "react";

import { Button, Input } from "../components";

export const Welcome = () => {

// temp
  const [isDisabled, setIsDisabled] = useState(true)
  const onNameInputHandler = e => {
    const value = e.target.value.trim()
    if (value.length >= 3) {
      setIsDisabled(false)
      return
    }
    if (value.length < 3) {
      setIsDisabled(true)
      return
    }
  }
// temp

  
  return (   
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form" >
            <Input label="Ваше имя" type="text" name="username" id="username" placeholder="Ваш ответ" errorMessage="Введите имя в правильном формате" onInput={onNameInputHandler} />            
            <Input label="Ваш номер" type="tel" name="phone" id="phone" placeholder="+998 9- --- -- -- " pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$" errorMessage="Введите номер в правильном формате" />
            {/* <Button type={'submit'} step="/step/1" disabled={isDisabled}/> */}
            <Button type={'submit'} step="/step/1" />
          </form>
        </div>
      </div>
    </div> 
  );
};
