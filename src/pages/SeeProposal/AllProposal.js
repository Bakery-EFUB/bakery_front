import React, { useEffect, useState } from "react";
import TopBar from "../../components/Common/Sidebar/TopBar";
import ChooseBox from "../../components/WholeProposals/ChooseBox";
import NoProposal from "../../components/WholeProposals/NoProposal";
import PageTitle from "../../components/Common/PageTitle";
import styled from "styled-components";
import ProposalBox from "../../components/WholeProposals/PropasalBox";
import { GetOrder } from "../../api/home";
import { Link } from "react-router-dom";

const AllProposal = () => {
  const [allProposals, setAllProposals] = useState([]);
  useEffect(() => {
    GetOrder()
      .then(data => {
        setAllProposals(data["sheetResponseDTOs"]);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <TopBar />
      <PageTitle title="전체 제안서 리스트" margin="10% 0%"></PageTitle>
      <ChooseBox></ChooseBox>
      <ProposalsDisplay>
        {allProposals ? (
          Array.from(allProposals).map(orders => {
            return (
              <Link to={`/proposal/${orders.sheetId}`} key={orders.sheetId}>
                <ProposalBox
                  title={orders.member.nickname}
                  description={orders.type}
                  time={orders.createdAt}
                  hashtag={orders.hashtag}
                  image={orders.imageUrl}
                ></ProposalBox>
              </Link>
            );
          })
        ) : (
          <NoProposal />
        )}
      </ProposalsDisplay>
    </div>
  );
};
const ProposalsDisplay = styled.div`
  display: flex;
  flex-direction: column;
`;
export default AllProposal;
