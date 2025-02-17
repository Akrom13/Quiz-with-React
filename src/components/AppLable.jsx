import React from "react";

export const AppLable = ({
    labelText,
    labelPlaceholder,
    errorText,
    labelId,
    labelValue,
    labelChange
}) => {
    return (
        <label className = "input-wrapper" htmlFor = {labelId}>
            {labelText}
            <input
            required
            type="text"
            name={labelId}
            id={labelId}
            placeholder={labelPlaceholder}
            value={labelValue}
            onChange={(e)=> labelChange(e.target.value)}
            />
            <span id="error-message">{errorText}</span>
        </label>
    );
};
