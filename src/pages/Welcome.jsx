import React, { useState } from "react";
import { Button, Input } from "../components";

export const Welcome = () => {

  const [isNameValid, setIsNameValid] = useState(false)
  const [isTelValid, setIsTelValid] = useState(false)

  const isDisabled = !(isNameValid && isTelValid)

  const onNameInputHandler = e => {
    const value = e.target.value.trim()
    if (value.length < 3) {
      setIsNameValid(false)
      return
    }
    setIsNameValid(true)
  }

  const onTelInputHandler = e => {
    const value = e.target.value.trim()
    if (value.length !== 13) {
      setIsTelValid(false)
      return
    }
    if (value.slice(0, 4) !== '+998') {
      setIsTelValid(false)
      return
    }
    setIsTelValid(true)
  }
  
  return (   
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form" >
            <Input label="Ваше имя" type="text" name="username" id="username" placeholder="Ваш ответ" errorMessage="Введите имя в правильном формате" onInput={onNameInputHandler} autocomplete="name" />            
            <Input label="Ваш номер" type="tel" name="phone" id="phone" placeholder="+998 9- --- -- -- " pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$" errorMessage="Введите номер в правильном формате" onInput={onTelInputHandler} autocomplete="tel" />
            <Button type={'submit'} step="/step/1" disabled={isDisabled}/>
          </form>
        </div>
      </div>
    </div> 
  );
};
