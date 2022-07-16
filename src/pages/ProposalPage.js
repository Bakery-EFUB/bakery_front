import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import ProposalBox from "../components/WholeProposals/PropasalBox";
import ProposalTitle from "../images/ProposalTitle.svg";
import ChooseBox from "../components/WholeProposals/ChooseBox";
import NoProposal from "../components/WholeProposals/NoProposal";
const TextProposal = styled.img`
   position: absolute;
    width: 177px;
    height: 26px;
    left: 126px;
    top: 160px;
`;
const ProposalPage = ()=>{
    return(
        <div>
            <TopBar/>
            <TextProposal src={ProposalTitle}/>
            <ChooseBox></ChooseBox>
            <NoProposal/>
        </div>        
    )
};
export default ProposalPage;
