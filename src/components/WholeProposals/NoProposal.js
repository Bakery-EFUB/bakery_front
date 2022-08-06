import React from "react";
import styled from "styled-components";
import ProposalCake from "../../images/ProposalCake.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20% 0 0;
`;
const ProposalCakeImg = styled.img`
  width: 191.66px;
  height: 172.84px;
`;
const NoProposalText = styled.div`
  color: var(--main-pink);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;
const NoProposal = () => {
  return (
    <Container>
      <ProposalCakeImg src={ProposalCake} />
      <NoProposalText>제안서가 없어요</NoProposalText>
    </Container>
  );
};
export default NoProposal;
