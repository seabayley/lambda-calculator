import React from "react";

export const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button class='special_button button'>{props.special}</button>
    </>
  );
};

export default SpecialButton;