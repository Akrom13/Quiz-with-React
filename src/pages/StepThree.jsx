import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";

const StepThree = () => {
  const [userCharacter, setUseCharacter] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const variant = [
    {
      id: "variant-1",
      text: "Весёлый",
      img: "./img/laugh.png",
    },
    {
      id: "variant-2",
      text: "Красивый",
      img: "./img/hearts.png",
    },
    {
      id: "variant-3",
      text: "Хитрый",
      img: "./img/smirk.png",
    },
    {
      id: "variant-4",
      text: "Трусливый",
      img: "./img/fright.png",
    },
  ];
  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem("user")) || {}
    localStorage.setItem("user", JSON.stringify({...userData, userCharacter}))
    userCharacter ? setIsDisabled(false) : setIsDisabled(true)
  },[userCharacter])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Header headerText="Ваш характер" headerType="h2" />
            <ul className="emoji-variants">
              {variant.map((elem) => (
                <li className="variant-wrapper">
                  <input
                    key={elem.id}
                    required
                    type="radio"
                    name="variant"
                    value={elem.text}
                    id={elem.id}
                    onChange={(e) => setUseCharacter(e.target.value)}
                  />
                  <label htmlFor={elem.id}>
                    <img src={elem.img} alt="laugh" />
                    <p>{elem.text}</p>
                  </label>
                </li>
              ))}
            </ul>
            <AppButton
              isDisabled={isDisabled}
              btnClick={() => navigate("/step-four")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
