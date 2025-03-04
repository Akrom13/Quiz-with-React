import React from "react";

export const AppButton = ({
  btnText = "Далее",
  isDisabled,
  btnType = "button",
  btnClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      id="next-btn"
      onClick={btnClick}
    >
      {btnText}
    </button>
  );
};
