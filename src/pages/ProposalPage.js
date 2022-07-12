import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import ProposalBox from "../components/WholeProposals/PropasalBox";
import ProposalTitle from "../images/ProposalTitle.svg";
import ChooseBox from "../components/WholeProposals/ChooseBox";

const TextProposal = styled.img`
    margin-left: 40%;
    margin-right: 40%;
    margin-top: 10%;
`;
const ProposalPage = ()=>{
    return(
        <div>
            <TopBar/>
            <TextProposal src={ProposalTitle}/>
            <ChooseBox></ChooseBox>
            <ProposalBox/>
        </div>        
    )
};
export default ProposalPage;
