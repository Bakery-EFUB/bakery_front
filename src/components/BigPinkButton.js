import React from "react";
import styled from "styled-components";

const BigPinkButton = ({ children, margin }) => {
  const Button = styled.button`
    width: 380px;
    height: 60px;

    margin: ${margin};

    /* main pink */

    background: var(--main-pink);
    border: none;
    border-radius: 6px;
    box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);
    color: var(--sub-yellow);
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    text-align: center;
    text-transform: uppercase;
  `;

  return <Button>{children}</Button>;
};

export default BigPinkButton;
