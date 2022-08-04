import React, {useEffect, useState} from "react";
import TopBar from "../components/Common/Sidebar/TopBar";
import ChooseBox from "../components/WholeProposals/ChooseBox";
import NoProposal from "../components/WholeProposals/NoProposal";
import PageTitle from "../components/Common/PageTitle";
import styled from "styled-components";
import ProposalBox from "../components/WholeProposals/PropasalBox";
import { GetProposals } from "../api/allproposal";

const ProposalsDisplay = styled.div`
 display: flex;
 flex-direction: column;
`;

const AllProposal = () => {
  const [allProposals, setAllProposals] = useState([]);
  const proposalApi = () => {
    GetProposals()
    .then(
       data =>{
        setAllProposals(data);
      })
    .catch(e => {
      console.log(e);
    });
  };
  useEffect(() =>{
    proposalApi();
  },[]);
  return (
    <div>
      <TopBar />
      <PageTitle title="전체 제안서 리스트" margin="60px 0 63px 0"></PageTitle>
      <ChooseBox></ChooseBox>
      <ProposalsDisplay>
        {Array.from(allProposals).map(allProposals =>{
          return (<ProposalBox key= {allProposals.member.nickname} image = {allProposals.image} description = {allProposals.type} time ={allProposals.createdAt} hashtag={allProposals.hashtag}></ProposalBox>
          );
        })}
      </ProposalsDisplay>
    </div>
  );
};
export default AllProposal;
