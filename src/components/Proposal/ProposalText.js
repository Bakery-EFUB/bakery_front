import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-family: "Apple SD Gothic Neo";

  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;

  height: 26px;

  margin: 57px auto 0 auto;
`;

const ProposalText = ({ text }) => {
  return <Text>{text}</Text>;
};

export default ProposalText;
