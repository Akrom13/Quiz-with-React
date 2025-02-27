import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLabel } from "../components/AppLabel";
import { SpanLabel } from "../components/SpanLabel";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const [userOne, setUserOne] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

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
          <div className="indicator">
            <div className="indicator__text">
              <SpanLabel spanIndicatorText="Скидка за прохождение опроса:" />
              <SpanLabel spanIndicatorText="15%" />
            </div>
            <ProgressBar currentStep={1} />
          </div>
          <div className="question">
            <Header headerType="h2" headerText="Где вы про нас узнали ?" />
            <AppLabel
              errorText="Введите номер в правильном формате например"
              labelId="answer"
              labelPlaceholder="Ваш ответ"
              lableValue={userOne}
              lableChange={setUserOne}
            />
            <AppButton
              btnText="Далее"
              isDisabled={isDisabled}
              btnType="submit"
              btnClick={() => handleClick()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
