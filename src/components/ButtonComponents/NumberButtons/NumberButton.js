import React from "react";

export const NumberButton = (props) => {
  let className = 'number_button button';
  className += (props.number === '0' ? ' wide_button' : '');
  return (
    <>
      <button class={className}>{props.number}</button>
    </>
  );
};

export default NumberButton;