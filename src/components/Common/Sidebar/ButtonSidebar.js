import React from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  cursor: pointer;
  background-color: var(--white);
  border: 1px solid var(--main-pink);
  color: var(--main-pink);
  border-radius: 6px;
  margin: 10px 0;
  padding: 10px 0;
  width: 100%;
  height: 60px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--sub-lightgray);
  }
`;
const ButtonSidebar = ({ text, onClick }) => {
  return <SubmitButton onClick={onClick}>{text}</SubmitButton>;
};

export default ButtonSidebar;
