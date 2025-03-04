import React from "react";
import { Header } from "../components/Header";

const Thanks = () => {
  const { name, phone, points, selectCourse, userOne, userCharacter } =
    JSON.parse(localStorage.getItem("user"));
    const value = [
      {
        text: "Имя",
        userResponse: name,
      },
      {
        text: "Номер телефона",
        userResponse: phone,
      },
      {
        text: "От куда узнали",
        userResponse: userOne,
      },
      {
        text: "Желаемый курс",
        userResponse: selectCourse,
      },
      {
        text: "Ваш характер",
        userResponse: userCharacter,
      },
      {
        text: "Оценка школы",
        userResponse: points,
      },
    ]
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header headerText="Спасибо за прохождение опроса!" headerType="h1" />
          {value.map((elem)=> (
            <div className="info">
            <span>{elem.text}</span>
            <span>{elem.userResponse}</span>
            </div>
          ))}
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
