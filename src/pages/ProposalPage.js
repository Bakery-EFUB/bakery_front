import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import ProposalBox from "../components/WholeProposals/PropasalBox";
import ProposalTitle from "../images/ProposalTitle.svg";

const TextProposal = styled.div`
    margin-top: 100px;
    align-items: center;
`;
const ProposalBoxSet = styled.div`
    align-items: center;
`;
const ProposalPage = ()=>{
    <div>
        <TextProposal>
            <img src={ProposalTitle}/>
        </TextProposal>
        <ProposalBoxSet>
            <ProposalBox></ProposalBox>
        </ProposalBoxSet>
    </div>
};
export default ProposalPage;
