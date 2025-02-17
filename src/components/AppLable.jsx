import React from "react";

export const AppLable = ({
    lableText,
    lablePlaceholder,
    errorText,
    lableId,
    lableValue,
    lableChange,
}) => {
    return (
        <label className = "input-wrapper" htmlFor = {lableId}>
            {lableText}
            <input
            required
            type="text"
            name={lableId}
            id={lableId}
            placeholder={lablePlaceholder}
            value={lableValue}
            onChange={(e)=> lableChange(e.target.value)}
            />
            <span id="error-message">{errorText}</span>
        </label>
    );
};
