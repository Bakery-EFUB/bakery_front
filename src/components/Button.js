import React from "react";
import styled from "styled-components";

const Button = ({ onClick, text }) => {
  const SubmitButton = styled.button`
    cursor: pointer;
    background-color: var(--main-pink);
    color: var(--white);
    border-radius: 6px;
    margin: 10px 0;
    padding: 10px 0;
    width: 80%;
    height: 60px;
    font-size: 20px;
    border-style: none;
    &:hover {
      background-color: var(--sub-lightgray);
    }
  `;
  return <SubmitButton onClick={onClick}>{text}</SubmitButton>;
};

export default Button;
