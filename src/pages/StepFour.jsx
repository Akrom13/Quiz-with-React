import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";

const StepFour = () => {
  const [points, setPoints] = useState("");
  // const [isDisabled, setIsDisabled] = useState(true); 1 - Вариант
  const navigate = useNavigate();
  const variant = [
    {
      id: "variant-1",
      points: "1",
    },
    {
      id: "variant-2",
      points: "2",
    },
    {
      id: "variant-3",
      points: "3",
    },
    {
      id: "variant-4",
      points: "4",
    },
    {
      id: "variant-5",
      points: "5",
    },
  ];
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    localStorage.setItem("user", JSON.stringify({ ...userData, points }));
    // userCharacter ? setIsDisabled(false) : setIsDisabled(true); 1 - Вариант
  }, [points]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} />
          <div className="question">
            <Header headerText="4. Оцените наш учебный центр" headerType="h2" />
            <ul className="level-variants">
              {variant.map((elem) => (
                <li className="variant-wrapper">
                  <input
                    key={elem.id}
                    value={elem.points}
                    required
                    type="radio"
                    name="variant"
                    id={elem.id}
                    onChange={(e) => {
                      setPoints(e.target.value);
                    }}
                  />
                  <label htmlFor={elem.id}>{elem.points}</label>
                </li>
              ))}
            </ul>
            <AppButton
              isDisabled={points ? false : true} // 2 - Вариант
              btnClick={() => navigate("/thanks")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
