import styled from "styled-components";
import MoreIcon from "../../images/MoreInfo.svg";

const CardDisplayContainer = styled.div`
  margin-left: 5%;
`;

const Header = styled.div`
  display: flex;
  margin: 13% 5% 3% 0;
  align-items: center;
  justify-content: space-between;
  color: var(--main-pink);
  writing-mode: horizontal-tb;
`;

const Menu = styled.div`
  font-size: 23px;
  font-weight: 800;
`;

const Body = styled.div`
  display: flex;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MoreInfoIcon = styled.div`
  background: url(${MoreIcon});
  width: 9px;
  height: 13px;
  margin-left: 5px;
`;
const SeeAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { CardDisplayContainer, Header, Menu, Body, MoreInfoIcon, SeeAll };
