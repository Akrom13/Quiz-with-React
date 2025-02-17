import React from "react";

export const Header = ({headerText, headerType}) => {
    const renderHeader = () => {
        switch (headerType) {
            case "h1":
                return <h1>{headerText}</h1>
            case "h2":
                return <h1>{headerText}</h1>
            case "h3":
                return <h1>{headerText}</h1>
            case "h4":
                return <h1>{headerText}</h1>
            case "h5":
                return <h1>{headerText}</h1>
            case "h6":
                return <h1>{headerText}</h1>
            default:
                return <h1>{headerText}</h1>
        }
    };
    return renderHeader();
};