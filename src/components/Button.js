import React from "react";
import '../styles/Button.css';

function Button(props) {

  const isOperator = (val) => {
    switch (val) {
      case '+':
        return true;
      case '-':
        return true;
      case '*':
        return true;
      case '/':
        return true;
      default:
        return false;
    }
  }

  const isEqual = (val) => {
    switch (val) {
      case '=':
        return true;
      default:
        return false;
    }
  }


  return (
    <div
      className={`container-button ${isOperator(props.children) ? 'operator' : isEqual(props.children)? 'Equal' : ''}`}
      onClick={() => props.action(props.children)}>
      {props.children}
    </div>
  )
}

export default Button;