import React, {useEffect, useState} from "react";
import TopBar from "../components/TopBar";
import ChooseBox from "../components/WholeProposals/ChooseBox";
import NoProposal from "../components/WholeProposals/NoProposal";
import PageTitle from "../components/Common/PageTitle";

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
        {allProposals.map(orders =>{
          return (<ProposalBox key= {orders.member.nickname} description ={orders.type} time ={orders.createdAt} hashtag={hashtag}></ProposalBox>
          );
        })}
      </ProposalsDisplay>
    </div>
  );
};
export default AllProposal;
