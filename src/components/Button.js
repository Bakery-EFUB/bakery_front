import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  const SubmitButton = styled.button`
    cursor: pointer;
    background-color: var(--main-pink);
    color: var(--white);
    border-radius: 6px;
    font-family: "AppleSDGothicNeo";
    margin: 10px 0;
    padding: 10px 0;
    width: 80%;
    height: 60px;
    font-size: 20px;
    border-style: none;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: var(--sub-lightgray);
    }
  `;
  return <SubmitButton>{text}</SubmitButton>;
};

export default Button;
