import React from 'react';
import './PasswordStrength.css';


function PasswordStrength(props) {
    let error = "red", success = "#00db7c";
    if (
        props.capital == null &&
        props.special == null &&
        props.charLength == null
    ) error = "#d1d1d1";
    return (
        <div id="password-strength-main-container">
            <div id="password-strength-bar-1" style={{backgroundColor: props.capital ? success : error}} className="password-strength-bar">
                {props.capital !== true && <p className={error === "red" && "error"}>Capital Letter</p>}
            </div>
            <div id="password-strength-bar-2" style={{backgroundColor: props.special ? success : error}} className="password-strength-bar">
                {props.special !== true && <p className={error === "red" && "error"}>Special Char</p>}
            </div>
            <div id="password-strength-bar-3" style={{backgroundColor: props.charLength >= 8 ? success : error}}className="password-strength-bar">
                {(!+props.charLength || props.charLength < 8) && <p className={error === "red" && "error"}>Password Length</p>}
            </div>
      </div>
  );
}

export default PasswordStrength;
