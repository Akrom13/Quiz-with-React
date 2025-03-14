import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLabel } from "../components/AppLabel";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const RegexUser = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
  const RegexPhone =
    /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const handleClick = () => {
    if (!RegexUser.test(userName)) {
      setErrorName(true);
    }
    if (!RegexPhone.test(userPhone)) {
      setErrorPhone(true);
    }
    if (RegexUser.test(userName) && RegexPhone.test(userPhone)) {
      setErrorName(false);
      setErrorPhone(false);
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...userData, phone: userPhone, name: userName })
        );
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify({ phone: userPhone, name: userName })
        );
      }
      navigate("/step-one");
    }
  };

  useEffect(() => {
    if (userName && userPhone) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userName, userPhone]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerType="h1"
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppLabel
              errorText="Введите Имя в правильном порядке"
              labelId="username"
              labelPlaceholder="Имя"
              labelText="Ваше имя"
              labelValue={userName}
              labelChange={setUserName}
              isError={errorName}
            />
            <AppLabel
              errorText="Введите номер в правильном порядке"
              labelId="phone"
              labelPlaceholder="+998 9- --- -- --"
              labelText="Ваш номер"
              labelValue={userPhone}
              labelChange={setUserPhone}
              isError={errorPhone}
            />
            <AppButton
              btnClick={() => navigate("/step-one")}
              isDisabled={isDisabled}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
