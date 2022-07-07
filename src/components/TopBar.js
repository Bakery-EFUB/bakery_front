<<<<<<< HEAD
import styled from "styled-components";
import TopPinkBoximg from "../images/TopPinkBox.svg";
import TopLogoimg from "../images/TopLogo.svg";
import TopMenuBarimg from "../images/TopMenuBar.svg";

const TopBarPink = styled.div`
  background: url(${TopPinkBoximg});
  width: 428px;
  height: 60px;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`;

const TopLogo = styled.div`
  background: url(${TopLogoimg});
  width: 130.13px;
  height: 33px;
  position: absolute;
  left: 34.79%;
  right: 34.8%;
  top: 21.71%;
  bottom: 23.29%;
`;

const TopMenuBar = styled.div`
  background: url(${TopMenuBarimg});
  width: 20px;
  height: 21px;
  position: absolute;
  left: 5.61%;
  right: 89.72%;
  top: 35%;
  bottom: 36.59%;
`;

const TopBar = () => {
  return (
    <div>
      {" "}
      <TopBarPink>
        <TopLogo></TopLogo>
        <TopMenuBar></TopMenuBar>
      </TopBarPink>
    </div>
  );
=======
import styled from 'styled-components';
import TopLogoimg from '../images/TopLogo.svg';
import TopMenuBarimg from '../images/TopMenuBar.svg';

import '../styles/common.scss';

const TopBarPink = styled.div`
	background-color: var(--main-pink);

	width: 100%;
	overflow: hidden;
	height: 60px;

	position: absolute;
	left: 0%;
	right: 0%;
	top: 0%;
	bottom: 0%;
`;

const TopLogo = styled.div`
	background: url(${TopLogoimg});
	width: 130.13px;
	height: 33px;
	position: absolute;
	left: 34.79%;
	right: 34.8%;
	top: 21.71%;
	bottom: 23.29%;
`;

const TopMenuBar = styled.div`
	background: url(${TopMenuBarimg});
	width: 20px;
	height: 21px;
	position: absolute;
	left: 5.61%;
	right: 89.72%;
	top: 35%;
	bottom: 36.59%;
`;

const TopBar = () => {
	return (
		<div>
			<TopBarPink>
				<TopLogo></TopLogo>
				<TopMenuBar></TopMenuBar>
			</TopBarPink>
		</div>
	);
>>>>>>> ad0c1986eedb81f00de8d2fa00334b738a73e7d7
};

export default TopBar;
