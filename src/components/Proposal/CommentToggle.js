import React from "react";
import styled, { css } from "styled-components";

const Toggle = styled.p`
  width: 25px;
  height: 17px;

  margin: 0;
  margin-left: auto;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  text-align: right;

  ${props =>
    props.selected
      ? css`
          color: var(--main-pink);
        `
      : css`
          color: var(--sub-darkgray);
        `}
`;

const CommentToggle = ({ children, onClick, test, ...props }) => {
  return (
    <Toggle {...props} onClick={onClick}>
      {children}
    </Toggle>
  );
};

export default CommentToggle;
