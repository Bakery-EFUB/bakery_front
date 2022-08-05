import React, {useEffect, useState} from "react";
import TopBar from "../../components/Common/Sidebar/TopBar";
import ChooseBox from "../../components/WholeProposals/ChooseBox";
import NoProposal from "../../components/WholeProposals/NoProposal";
import PageTitle from "../../components/Common/PageTitle";
import styled from "styled-components";
import ProposalBox from "../../components/WholeProposals/PropasalBox";
import http from "../../common/http";
import { GetOrder } from "../../api/home";
const ProposalsDisplay = styled.div`
 display: flex;
 flex-direction: column;
`;

const AllProposal = () => {
  const [allProposals, setAllProposals] = useState([]);
  useEffect(() => {
    //setAllOrderInfo(orderList["sheetResponseDTOs"]);

    GetOrder()
      .then(data => {
        console.log(data);
        setAllProposals(data["sheetResponseDTOs"]);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  /* const proposalApi = () => {
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
  },[]);*/
  return (
    <div>
      <TopBar />
      <PageTitle title="전체 제안서 리스트" margin="10% 0% 10% 0%"></PageTitle>
      <ChooseBox></ChooseBox>
      <ProposalsDisplay>
        {allProposals?
          (
            Array.from(allProposals).map(orders => {
            return (<ProposalBox
            key= {orders.member.nickname} 
            description = {orders.type} 
            time ={orders.createdAt} 
            hashtag = {orders.hashtag}
            image = {orders.imageUrl} >

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
