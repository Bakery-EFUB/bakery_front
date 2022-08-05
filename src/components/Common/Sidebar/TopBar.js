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
import { userRole } from "../../../utils/auth";
import { useAppDispatch, useAppSelector } from "../../../store";
import { initUser } from "../../../store/features/userSlice";
import { persistor } from "../../..";

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
  margin: 12px auto;
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
  const { nickname, imageUrl, role, isLogin } = useAppSelector(
    state => state.user,
  );

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [userStatus, setUserStatus] = useState();
  useEffect(() => {
    if (userRole === "ROLE_CLIENT") setUserStatus(SidebarDataClient);
    else if (userRole === "ROLE_TRAINEE" || userRole === "ROLE_BAKER")
      setUserStatus(SidebarDataBaker);
    else setUserStatus(SidebarDataGuest);
  }, []);

  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const Logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    localStorage.setItem("isLogin", JSON.stringify("false"));
    dispatch(initUser());
    console.log(nickname, imageUrl, role);
  };
  const purge = async () => {
    await persistor.purge();
    nav("/");
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
            {isLogin ? (
              <>
                <LoginProfileImage src={imageUrl}></LoginProfileImage>
                <LoginBox>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "20px",
                      marginBottom: "2px",
                    }}
                  >
                    {nickname} 님
                  </div>
                  <div>계정관리</div>
                </LoginBox>
              </>
            ) : (
              <>
                <ProfileImg></ProfileImg>로그인해 주세요
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
          {isLogin ? (
            <ButtonSidebar
              onClick={async () => {
                Logout();
                setTimeout(() => purge(), 200);
              }}
              text="로그아웃"
            ></ButtonSidebar>
          ) : (
            <Link to="/kakao">
              <ButtonSidebar text="로그인"></ButtonSidebar>
            </Link>
          )}
        </nav>
      </TopBarPink>
    </div>
  );
};

export default TopBar;
