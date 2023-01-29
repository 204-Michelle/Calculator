import React from "react";
import '../styles/ResetButton.css';

function ResetButton(props) {
  return (
    <div
      className= 'reset-button'
      onClick={() => props.action(props.children)}>
      {props.children}
    </div>
  )
}

export default ResetButton;