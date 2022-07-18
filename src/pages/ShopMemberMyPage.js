import TopBar from "../components/TopBar";
import styled from "styled-components";
import MoreViewimg from "../images/MoreView.svg";
import UserLogoimg from "../images/UserLogo.svg";
import CountManageimg from "../images/CountManage.svg";
import Mock from "../images/Mock.svg";
import { Link } from "react-router-dom";

const WrapBox = styled.div`
  width: 428px;
`;

const Box = styled.div`
  background-color: var(--sub-pink);
  width: 428px;
  height: 619.09px;
  left: 0px;
  top: 306.91px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 380px;
  height: 60px;
  margin-left: 23.86px;
  margin: 44.31px 0px 0px 23.86px;
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
  width: 380px;
  height: 60px;
  /* margin-left: 23.86px; */
  margin: 10px 0px 0px 23.86px;
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
  width: 380.14px;
  height: 253.21px;
  margin: 19.64px 0px 0px 23.86px;
  top: 297.57px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Article = styled.article`
  background: url(${Mock});
  width: 120px;
  height: 120px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
`;

const MoreView = styled.div`
  background: url(${MoreViewimg});
  width: 195.31px;
  height: 30.31px;
  margin: 19.64px 0px 0px 199.31px;
  background-repeat: no-repeat;
`;

const MypagePlace = styled.div`
  margin: 60px 0 10px 0;
  bottom: 0%;
  text-align: left;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
`;
const ShopDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

const DetailInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0px;
`;

const CountManager = styled.div`
  background: url(${CountManageimg});
  background-repeat: no-repeat;
  width: 54px;
  height: 14px;
  margin: 117.12px 24.31px 0px 0px;
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
  margin: 42.79px 0px 0px 24.21px;
  width: 99px;
  height: 99px;
  left: 24.21px;
  top: 261.91px;
  background-repeat: no-repeat;
`;

const UserName = styled.div`
  width: 114.57px;
  height: 24px;
  margin: 110.7px 0px 0px 20px;
  text-align: left;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const UserPlace = styled.h1`
  width: 195.31px;
  height: 30.31px;
  margin: 10px 0px 0px 139px;

  z-index: 1;
  background: var(--sub-pink);
  text-align: left;
  font-family: "ITC Avant Garde Gothic";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;
const Back = styled.div`
  background-color: var(--sub-pink);
`;

const CommitProposal = styled.div`
  width: 137.05px;
  height: 19px;
  margin: 44.31px 0px 0px 24px;
  text-align: left;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const MockImg = styled.div`
  background: url(${Mock});
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 6px;
`;

//margin : 위 오른 아래 왼
const ShopMemberMyPage = () => {
  return (
    <WrapBox>
      <TopBar></TopBar>
      {/* <PageTitle title="마이페이지" margin="60px 0 63px 0" /> */}
      <MypagePlace>마이페이지</MypagePlace>
      <Back>
        <ShopDetailHeader>
          <DetailInfo>
            <UserLogo></UserLogo>
            <UserName>터틀힙 님,</UserName>
          </DetailInfo>
          <CountManager></CountManager>
        </ShopDetailHeader>

        <UserPlace>Caker 가게 회원</UserPlace>
      </Back>

      <Box>
        <Link to="/shopregister">
          <Button>가게 정보 관리</Button>
        </Link>
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
    </WrapBox>
  );
};

export default ShopMemberMyPage;
