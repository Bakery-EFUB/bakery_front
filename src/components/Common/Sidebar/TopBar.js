import styled from "styled-components";
import React, { useEffect, useState } from "react";
import TopLogoimg from "../../../images/TopLogo.svg";
import GuestProfile from "../../../images/Profile.svg";
import TopMenuBarimg from "../../../images/TopMenuBar.svg";
import SidebarCloseBtn from "../../../images/SidebarCloseBtn.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  SidebarDataBaker,
  SidebarDataClient,
  SidebarDataGuest,
} from "../Sidebar/SidebarData";
import ButtonSidebar from "./ButtonSidebar";
import "./Sidebar.css";
import "../../../styles/common.scss";
import { isLogined, userImage, userName, userRole } from "../../../utils/auth";

const TopBarPink = styled.div`
  z-index: 5;
  margin: 0;
  background-color: var(--main-pink);
  width: 100%;
  overflow: hidden;
  height: 60px;
  position: sticky;
  top: 0;
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

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 32px;
`;
const ProfileImg = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background: url(${GuestProfile});
  width: 47px;
  height: 47px;
  margin-right: 10px;
`;
const LoginBox = styled.div`
  flex-direction: column;
`;

const LoginProfileImage = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 70%;
`;

const CloseBtn = styled.div`
  height: 19px;
  width: 19px;
  background: url(${SidebarCloseBtn});
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  right: 30px;
  margin-bottom: 10%;
`;

const TopBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [userStatus, setUserStatus] = useState();
  useEffect(() => {
    if (userRole === "ROLE_CLIENT") setUserStatus(SidebarDataClient);
    else if (userRole === "ROLE_TRAINEE" || userRole === "ROLE_BAKER")
      setUserStatus(SidebarDataBaker);
    else setUserStatus(SidebarDataGuest);
  }, []);

  const Logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    location.reload();
  };

  return (
    <div>
      <TopBarPink>
        <Link to="/">
          <TopLogo></TopLogo>
        </Link>
        <TopMenuBar onClick={showSidebar}></TopMenuBar>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items"></ul>
          <li className="navbar-toggle">
            <CloseBtn onClick={showSidebar}></CloseBtn>
          </li>
          <Profile>
            {isLogined ? (
              <>
                <LoginProfileImage src={userImage}></LoginProfileImage>
                <LoginBox>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "20px",
                      marginBottom: "2px",
                    }}
                  >
                    {userName} ???
                  </div>
                  <div>????????????</div>
                </LoginBox>
              </>
            ) : (
              <>
                <ProfileImg></ProfileImg>???????????? ?????????
              </>
            )}
          </Profile>
          <hr />
          {userStatus?.map((item, index) => {
            return (
              <li key={index} className="nav-text">
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
          {isLogined ? (
            <ButtonSidebar
              onClick={() => Logout()}
              text="????????????"
            ></ButtonSidebar>
          ) : (
            <Link to="/kakao">
              <ButtonSidebar text="?????????"></ButtonSidebar>
            </Link>
          )}
        </nav>
      </TopBarPink>
    </div>
  );
};

export default TopBar;
