import React from "react";


export const SpanLable = ({
    spanIndicatorText
}) => {
    return (
        <div className="indicator__text">
              <span className="indicator__description">
                {spanIndicatorText}
              </span>
              <span className="indicator__value">{spanIndicatorText}</span>
            </div>
    );
};