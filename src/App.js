import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import LoginHome from "./pages/Auth/LoginHome";
import MainHome from "./pages/Main/MainHome";
import ShopDetailPage from "./pages/ShopDetailPage";
import AddSchedulePage from "./pages/AddSchedulePage";

import SearchPage from "./pages/ShopSearch/SearchPage";
import Recommend from "./pages/ShopSearch/Recommend";
import OurService from "./pages/ServiceInfo/OurService";
import ShopMemberMyPage from "./pages/MyPage/ShopMemberMyPage";

import AllProposal from "./pages/SeeProposal/AllProposal";

// 제안서 관련
import Proposal from "./pages/Proposal/Proposal";
import AllProposal from "./pages/Proposal/AllProposal";
import EditProposal from "./pages/EditProposal/EditProposal";
import CreateProposal from "./pages/CreateProposal/CreateProposal";

import ShopMypageStart from "./pages/ShopMyPageStart";
import ShopMyPageProgressive from "./pages/ShopMyPageProgressive";
import PickupSchedulePage from "./pages/PickupSchedulePage";
import ShopInformationRegister from "./pages/MyPage/ShopInformationRegister";
import ShopInformationModify from "./pages/MyPage/ShopInformationModify";
import LoginLoading from "./pages/Auth/LoginLoading";
import { userRole } from "./utils/auth";
import ClientRoute from "./route/ClientRoute";
import TraineeRoute from "./route/TraineeRoute";
import BakerRoute from "./route/BakerRoute";
import AccountSetting from "./pages/AccountSetting/AccountSetting";
import AccountRemove from "./pages/AccountSetting/AccountRemove";
import ShopCakerMyPage from "./pages/MyPage/ShopCakerMyPage";

import Kakao from "./pages/Auth/Kakao";
import NoPermission from "./pages/Auth/NoPermission";

function App() {
  console.log(userRole);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<MainHome />} />
        <Route exact path="/kakaologin" element={<LoginLoading />} />
        <Route exact path="/kakao" element={<Kakao />} />
        <Route exact path="/loginhome" element={<LoginHome />} />
        <Route exact path="/loading" element={<LoadingPage />} />
        <Route exact path="/shopdetail/:storeId" element={<ShopDetailPage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/recommend" element={<Recommend />} />
        <Route path="/create/*" element={<CreateProposal />} />
        <Route path="/edit/*" element={<EditProposal />} />
        <Route path="/proposal/:id" element={<Proposal />} />
        <Route exact path="/about" element={<OurService />} />
        <Route exact path="/mypagecaker" element={<ShopCakerMyPage />} />
        <Route exact path="/allproposal" element={<AllProposal />} />

        {/* 마이페이지 */}
        <Route exact path="/client/mypage" element={<ShopMemberMyPage />} />
        <Route exact path="/caker/mypage" element={<ShopCakerMyPage />} />
        <Route exact path="/shop/mypage" element={<ShopMypageStart />} />
        <Route
          exact
          path="/shop/progressive"
          element={<ShopMyPageProgressive />}
        />
        <Route
          exact
          path="/shop/register"
          element={<ShopInformationRegister />}
        />
        <Route exact path="/shop/modify" element={<ShopInformationModify />} />
        <Route
          exact
          path="/shop/progressive"
          element={<ShopMyPageProgressive />}
        />
        <Route exact path="/client/modify" element={<AccountSetting />} />
        <Route exact path="/accountremove" element={<AccountRemove />} />
        {/* 스케줄 */}
        <Route
          exact
          path="/shop/pickupschedule/:storeId"
          element={<PickupSchedulePage />}
        />
        <Route
          exact
          path="/shop/addschedule/:storeId"
          element={<AddSchedulePage />}
        />
        {/* 잘못된 접근 */}
        <Route exact path="/accessfail" element={<NoPermission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
