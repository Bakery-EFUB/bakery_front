import React from "react";
import styled from "styled-components";
import Rectangle from '../../images/Rectangle.svg';

const Oneproposal = styled.div`
`;
const Cakeimg = styled.div`
    border-radius: 15%;
    margin : 15px;
`;
const Textbox = styled.div`
    border-left: 15px;
    flex-direction: row;
    width: 250px;
    height: 100px;
`;
const Title = styled.div`
    color: black;
    font-weight: bold;
    font-size: 20px;
    margin : 5px;  
`;
const Description = styled.div`
    color: black;
    margin : 5px;
    font-size: 15px;
`;
const Hashtag = styled.div`
    color: #FF7B72;
    font-size: 10px;
    margin-left: 10px;
`;
const HashtagBox = styled.div`
    margin-top: 100px;
    flex-direction: column;
`;
const Timeshow = styled.div`
    color: #949494;
    font-size: 10px;
`;
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