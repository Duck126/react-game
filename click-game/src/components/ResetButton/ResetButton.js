import React from "react";
import "./ResetButton.css";

const ResetButton = props => {
    return(
        <div>
            <a className="waves-effect waves-teal btn-flat reset" onClick={props.handleReset}>Reset</a>
        </div>
    );
};

export default ResetButton;