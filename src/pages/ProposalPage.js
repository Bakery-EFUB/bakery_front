import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import ProposalBox from "../components/WholeProposals/PropasalBox";
import ProposalTitle from "../images/ProposalTitle.svg";
import ChooseBox from "../components/WholeProposals/ChooseBox";

const TextProposal = styled.div`
    margin-top: 100px;
`;
const ProposalBoxSet = styled.div`
    margin-top: 50px;
`;
const ProposalPage = ()=>{
    <div>
        <TopBar/>
        <TextProposal>
            <img src={ProposalTitle}/>
        </TextProposal>
        <ChooseBox></ChooseBox>
        <ProposalBoxSet>
            <ProposalBox></ProposalBox>
        </ProposalBoxSet>
    </div>
};
export default ProposalPage;
