import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import http from "../../common/http";

const PopupBox = styled.div`
   /* Rectangle 1549 */
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 330px;
    height: 264px;
    margin-left: 50px;
    margin-top:-567px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    z-index: 1000;
`; 
const PopupText = styled.div`
    width: 160px;
    height: 26px;
    margin-left: 91px;
    margin-top: 42px;

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
    width: 219px;
    height: 46px;
    margin-left: 56px;
    margin-top: 38px;
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
const BtnContatiner = styled.div`
    margin-top: 55px;
    display: flex;
    flex-direction: row;
`;
const GoToBackBtn = styled.button`
  	background-color: white;
	border: 2px solid var(--main-pink);
	border-radius: 6px;
    width: 140px;
    height: 48px;
    margin-left: 21px;
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
    margin-left: 15px;
    
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
const RemoveAccount = () => {
    http
        .delete(`/member/account`)
        .then(console.log("계정 탈퇴 성공"))
        .catch(e => {
            console.log(e);
        });
}
const AccountRemovePop = (props)=>{
    const {onClose} = props;
    return(
        <PopupBox>
            <PopupText>정말 탈퇴하세요?</PopupText>
            <PopupDescription>제안서는 삭제되지 않으며<br/>탈퇴 후 계정을 복구할 수 없습니다. </PopupDescription>
            <BtnContatiner>
                <GoToBackBtn onClick={() => {onClose(false);}}>취소</GoToBackBtn>
                <Link to = "/accountremove"><OkayBtn onClick={() => {
                    onClose(false);
                    RemoveAccount();}}>탈퇴</OkayBtn></Link>
            </BtnContatiner>
        </PopupBox>
    );
};
export default AccountRemovePop;