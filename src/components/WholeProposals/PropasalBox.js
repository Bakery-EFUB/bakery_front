import React from "react";
import styled from "styled-components";
import Rectangle from '../../images/Rectangle.svg';
import BoxLine from '../../images/BoxLine.svg';

const Container = styled.div`

`;
const Oneproposal = styled.div`
    display: flex;
    flex-direction: row;
`;
const Cakeimg = styled.div`
    border-radius: 15%;
    margin : 15px;
`;
const Textbox = styled.div`
    border-left: 15px;
    flex-direction: column;
    width: 250px;
    height: 100px;
`;
const Title = styled.div`
    color: black;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Apple SD Gothic Neo';
    margin-top: 5%;  
`;
const Description = styled.div`
    color: black;
    font-family: 'Apple SD Gothic Neo';
    margin-bottom: 5%;
    font-size: 15px;
`;
const Hashtag = styled.div`
    color: #FF7B72;
    font-family: 'Apple SD Gothic Neo';
    font-size: 10px;
`;
const HashtagBox = styled.div`
    margin-top: 17%;
    display: flex;
    flex-direction: row;
`;
const Timeshow = styled.div`
    color: #949494;
    font-family: 'Apple SD Gothic Neo';
    margin: 1%;
    font-size: 10px;
`;
const Line = styled.img`
`
const ProposalBox = ()=>{
    return(
        <Oneproposal>
            <Cakeimg>
                <img src={Rectangle}/>
            </Cakeimg>
            <Textbox>
                <Title>cake1235</Title>
                <Description>레터링케이크</Description>
                <HashtagBox>
                    <Hashtag>#서대문구</Hashtag>
                    <Hashtag>#북아현동</Hashtag>
                </HashtagBox>
            </Textbox>
            <Timeshow>
                10분전
            </Timeshow>
        </Oneproposal>
    )
};
export default ProposalBox;