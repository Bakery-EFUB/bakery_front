import React from "react";
import styled from "styled-components";
import {ServiceBackground} from "../images/ServiceBackground.svg";
import {WeAreCakers} from "../images/WeAreCakers.svg";
import {ServiceTitle} from "../images/ServiceTitle.svg";

const Container = styled.div`
    width: 100%;
    margin: 7%;
`;
const BackGroundImg = styled.div`
    background: url(${ServiceBackground});
    width: 403.68px;
    height: 1379.12px;
    position: absolute;
`;
const StartText = styled.div`
    color: #FF7B72;
    font-size:13px;
    position: absolute;
    left: 10%;
    top: 10%;
`;
const StartImg = styled.div`
`;
const Description1 = styled.div`
`;
const TitleText1 = styled.div`
`;
const Description2 = styled.div`
`;
const TitleText2 = styled.div`
`;
const Description3 = styled.div`
`;
const LastImg = styled.div`
`;
const Button = styled.div`
`;
const OurService = () =>{
    return(
        <Container>
            <BackGroundImg></BackGroundImg>
            <StartText>특별한 하루 메이커,</StartText>
        </Container>
    )
};
export default OurService;