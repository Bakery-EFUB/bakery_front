import React, { useState } from "react";
import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: var(--sub-pink);

  position: relative;
`;

const Progress = styled.div`
  position: absolute;
  height: 4px;
  background-color: var(--main-pink);

  width: ${({ percent }) => percent}%;

  transition: width 1s ease-in-out;
`;

const Wrapper = styled.div`
  margin: 11px 24px 0 24px;
`;

const ProgessBar = ({ step, before }) => {
  const [percent, setPercent] = useState(before);

  setTimeout(() => setPercent(step), 250);

  return (
    <Wrapper>
      <Bar>
        <Progress percent={percent} />
      </Bar>
    </Wrapper>
  );
};

export default ProgessBar;
