import TopBar from "../components/TopBar";
import styled from "styled-components";
import MoreViewimg from "../images/MoreView.svg";
import UserLogoimg from "../images/UserLogo.svg";
import CountManageimg from "../images/CountManage.svg";

const Box = styled.div`
  background-color: var(--sub-pink);
  position: absolute;
  width: 100%;
  height: 619.09px;
  left: 0px;
  top: 306.91px;
`;

const Button = styled.button`
  position: absolute;
  width: calc(100% - 48px);
  height: 60px;
  left: 24px;
  top: 84.63px;
  color: white;
  background: var(--main-pink);
  border-radius: 6px;
  border: 0.1px solid var(--main-pink);
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
`;

const Button2 = styled.button`
  position: absolute;
  width: calc(100% - 48px);
  height: 60px;
  left: 23.86px;
  top: 154.63px;
  color: white;
  background: var(--main-pink);
  border-radius: 6px;
  border: 0.1px solid var(--main-pink);
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
`;

const BottomProposal = styled.div`
  position: absolute;
  width: calc(100% - 48px);
  height: 253.21px;
  left: 23.86px;
  top: 297.57px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Article = styled.article`
  width: 105px;
  height: 105px;
  border: 1px solid red;
  display: inline-block;
`;

const MoreView = styled.div`
  background: url(${MoreViewimg});
  position: absolute;
  width: 32px;
  height: 30.31px;
  top: 570.42px;
  left: 50%;
  text-align: center;
  background-repeat: no-repeat;

  transform: translateX(-50%);
`;

const MypagePlace = styled.div`
  position: absolute;
  left: 50%;
  top: 160px;
  transform: translateX(-50%);
  text-align: left;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
`;

const CountManager = styled.div`
  background: url(${CountManageimg});
  background-repeat: no-repeat;
  position: absolute;
  width: 54px;
  height: 14px;
  margin-left: 310px;
  top: 280.7px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
`;

const UserLogo = styled.div`
  background: url(${UserLogoimg});
  box-sizing: border-box;
  position: absolute;
  width: 99px;
  height: 99px;
  left: 24.21px;
  top: 261.91px;
  z-index: 1;
  background-repeat: no-repeat;
`;

const UserName = styled.div`
  position: absolute;
  width: 114.57px;
  height: 24px;
  left: 139px;
  top: 273.7px;
  text-align: left;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const UserPlace = styled.h1`
  position: absolute;
  width: 195.31px;
  height: 30.31px;
  left: 139px;
  top: 305.91px;
  z-index: 1;
  text-align: left;
  font-family: "ITC Avant Garde Gothic";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

const CommitProposal = styled.div`
  position: absolute;
  width: 137.05px;
  height: 19px;
  left: 24px;
  top: 258.94px;
  text-align: left;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const ShopMemberMyPage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <MypagePlace>마이페이지</MypagePlace>
      <div>
        {" "}
        <UserName>터틀힙 님,</UserName>
        <CountManager></CountManager>
      </div>

      <UserPlace>Caker 가게 회원</UserPlace>
      <UserLogo></UserLogo>
      <Box>
        <Button>가게 정보 관리</Button>
        <Button2>픽업 일정 관리</Button2>
        <CommitProposal>댓글 단 제안서</CommitProposal>
        <BottomProposal>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </BottomProposal>
        <MoreView />
      </Box>
    </div>
  );
};

export default ShopMemberMyPage;
