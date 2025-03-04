import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLabel } from "../components/AppLabel";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const [userOne, setUserOne] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (userOne) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userOne]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <Header headerType="h2" headerText="Где вы про нас узнали ?" />
            <AppLabel
              errorText="Введите номер в правильном формате например"
              labelId="answer"
              labelPlaceholder="Ваш ответ"
              labelValue={userOne}
              labelChange={setUserOne}
            />
            <AppButton
              btnClick={() => navigate("/step-two")}
              isDisabled={isDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
