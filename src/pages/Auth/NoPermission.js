import styled from "styled-components";
import CakeImg from "../../images/NoResult.svg";
import { Link } from "react-router-dom";

const FlexBox = styled.div`
  height: 70vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoPermissionMsg = styled.div`
  font-size: 20px;
  margin: 30px 0 10px;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: var(--main-pink);
  color: var(--white);
  border-radius: 6px;
  margin: 10px 0 0;
  padding: 10px 20px;
  font-size: 16px;
  border-style: none;
  &:hover {
    background-color: var(--sub-lightgray);
  }
`;

const NoPermission = () => {
  return (
    <FlexBox>
      <img src={CakeImg} width="40%" alt="cake image" />
      <NoPermissionMsg>페이지에 접근할 수 없어요</NoPermissionMsg>
      <Link to="/">
        <Button>홈으로 돌아가기</Button>
      </Link>
    </FlexBox>
  );
};

export default NoPermission;
