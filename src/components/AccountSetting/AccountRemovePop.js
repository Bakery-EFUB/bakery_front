import styled from "styled-components";
import React from "react";

const PopupBox = styled.div`
   /* Rectangle 1549 */

    display: felx;
    flex-direction: column;
    position: absolute;
    width: 330px;
    height: 264px;
    left: 50px;
    top: 368px;

    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`; 
const PopupText = styled.div`
    position: absolute;
    width: 149px;
    height: 26px;
    left: 141px;
    top: 410px;

    /* title */

    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    /* black text */

    color: #202020;
`;
const PopupDescription = styled.div`
    position: absolute;
    width: 219px;
    height: 46px;
    left: 106px;
    top: 466px;
    white-space: wrap;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal; 
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;

    /* black text */

    color: #202020;
`;
const GoToBackBtn = styled.button`
  	background-color: white;
	border: 2px solid var(--main-pink);
	border-radius: 6px;
    width: 140px;
    height: 48px;
    left: 71px;
    top: 560px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

	color: var(--main-pink);

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	text-transform: uppercase;
`;
const OkayBtn = styled.button`
    position: absolute;
    width: 140px;
    height: 48px;
    left: 220px;
    top: 560px;
    
	background: var(--main-pink);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	border: none;
	border-radius: 6px;

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	/* identical to box height */

	text-align: center;
	text-transform: uppercase;

	color: white;
`;
const AccountRemovePop = ()=>{
    return(
        <PopupBox>
            <PopupText>정말 탈퇴하세요?</PopupText>
            <PopupDescription>제안서는 삭제되지 않으며<br/>탈퇴 후 계정을 복구할 수 없습니다. </PopupDescription>
            <GoToBackBtn>취소</GoToBackBtn>
            <OkayBtn>탈퇴</OkayBtn>
        </PopupBox>
    );
};
export default AccountRemovePop;