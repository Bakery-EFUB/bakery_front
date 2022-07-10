import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import ProposalBox from "../components/WholeProposals/PropasalBox";
import ProposalTitle from "../images/ProposalTitle.svg";
import ChooseBox from "../components/WholeProposals/ChooseBox";
const PageView = styled.div`
    align-items: center;
`;
const TextProposal = styled.div`
    margin-top: 100px;
`;
const ProposalBoxSet = styled.div`
`;
const ProposalPage = ()=>{
    <PageView>
        <TopBar>
       </TopBar>
        <TextProposal>
            <img src={ProposalTitle}/>
        </TextProposal>
        <ChooseBox></ChooseBox>
        <ProposalBoxSet>
            <ProposalBox></ProposalBox>
        </ProposalBoxSet>
    </PageView>
};
export default ProposalPage;
