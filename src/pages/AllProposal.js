import React from "react";
import TopBar from "../components/Common/Sidebar/TopBar";
import ChooseBox from "../components/WholeProposals/ChooseBox";
import NoProposal from "../components/WholeProposals/NoProposal";
import PageTitle from "../components/Common/PageTitle";

const AllProposal = () => {
  return (
    <div>
      <TopBar />
      <PageTitle title="전체 제안서 리스트" margin="60px 0 63px 0"></PageTitle>
      <ChooseBox></ChooseBox>
      <NoProposal />
    </div>
  );
};
export default AllProposal;
