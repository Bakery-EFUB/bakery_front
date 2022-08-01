import styled from "styled-components";
import Button from "../../components/Button";
import CakeImg from "../../images/NoResult.svg"
import { useNavigate } from "react-router-dom";

const FlexBox = styled.div`
  height: 70vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const ResizingBox = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  transform: scale(0.8);
`;

const NoPermissionMsg = styled.div`
  font-size: 20px;
  margin: 30px 0 10px;
`;

const NoPermission = () => {
  const nav = useNavigate();
  
  return (
    <FlexBox>
      <img src={CakeImg} width='40%' alt="cake image"/>
      <NoPermissionMsg>페이지에 접근할 수 없어요</NoPermissionMsg>
      <ResizingBox>
        <Button text='홈으로 돌아가기' onClick={() => nav('/')}/>
      </ResizingBox>
    </FlexBox>
  );
};

export default NoPermission;
