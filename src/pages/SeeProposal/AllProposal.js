import React, {useEffect, useState} from "react";
import TopBar from "../../components/Common/Sidebar/TopBar";
import ChooseBox from "../../components/WholeProposals/ChooseBox";
import NoProposal from "../../components/WholeProposals/NoProposal";
import PageTitle from "../../components/Common/PageTitle";
import styled from "styled-components";
import ProposalBox from "../../components/WholeProposals/PropasalBox";
import http from "../../common/http";

const ProposalsDisplay = styled.div`
 display: flex;
 flex-direction: column;
`;

const AllProposal = () => {
  const [allProposals, setAllProposals] = useState([]);
  const proposalApi = () => {
    http
    .get(`https://caker.shop/orders`)
    .then(
       data =>{
        setAllProposals(data["sheetResponseDTOs"]);
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
        {allProposals?
          (
            Array.from(allProposals).map(orders =>{
            return (<ProposalBox
            key= {orders.member.nickname} 
            image = {orders.image} 
            description = {orders.type} 
            time ={orders.createdAt} 
            hashtag={orders.hashtag}>

            </ProposalBox>
          );
        })
        ) :(
          <NoProposal/>
        )}
      </ProposalsDisplay>
    </div>
  );
};
export default AllProposal;
