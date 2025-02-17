import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";



const Welcome = () => {
  const [userName,setUserName] = useState("");
  const [userPhone,setUserPhone] = useState("");
  const [isDisabled,setIsDisabled] = useState(true);

  useEffect(()=>{
    if(userName && userPhone){
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
  }, [userName,userPhone]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerType="h1" headerText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppLable
            errorText="Введите Имя в правильном порядке"
            labelId="username"
            labelPlaceholder="Имя"
            labelText="Ваше имя"
            labelValue={userName}
            labelChange={setUserName}
            />
            <AppLable
            errorText="Введите номер в правильном порядке"
            labelId="phone"
            labelPlaceholder="+998 9- --- -- --"
            labelText="Ваш номер"
            labelValue={userPhone}
            labelChange={setUserPhone}
            />
            <AppButton btnText="Далее" isDisabled={isDisabled} btnType="submit"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
