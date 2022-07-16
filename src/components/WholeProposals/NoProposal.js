import React from "react";
import styled from "styled-components";
import ProposalCake from "../../images/ProposalCake.svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;
const ProposalCakeImg = styled.img`
    position: absolute;
    width: 191.66px;
    height: 172.84px;
    left: 118px;
    top: 403px;
`;
const NoProposalText = styled.div`
    position: absolute;
    width: 102px;
    height: 19px;
    left: 162px;
    top: 611.66px;
    color: #FF7B72;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    padding-bottom: 295.54px;
`;
const NoProposal = () =>{
    return(
        <Container>
            <ProposalCakeImg src={ProposalCake}/>
            <NoProposalText>제안서가 없어요</NoProposalText>
        </Container>
    );
};
export default NoProposal;