import React from 'react';
import './PasswordStrength.css';


function PasswordStrength(props) {
    return (
        <div id="password-strength-main-container">
            <div id="password-strength-bar-1" style={{backgroundColor: props.score == 1 ? "red" : props.score == 2 ? "#f0aa4f" : props.score == 3 ? "#00db7c" : "#d1d1d1"}} className="password-strength-bar" />
            <div id="password-strength-bar-2" style={{backgroundColor: props.score == 2 ? "#f0aa4f" : props.score == 3 ? "#00db7c" : "#d1d1d1"}} className="password-strength-bar" />
            <div id="password-strength-bar-3" style={{backgroundColor: props.score == 3 ? "#00db7c" : "#d1d1d1"}}className="password-strength-bar" />
      </div>
  );
}

export default PasswordStrength;
