import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import LoginHome from "./pages/Auth/LoginHome";
import MainHome from "./pages/Main/MainHome";
import ShopDetailPage from "./pages/ShopDetailPage";
import AddSchedulePage from "./pages/AddSchedulePage";
import SearchPage from "./pages/SearchPage";
import Recommend from "./pages/Recommend";
import CreateProposal from "./pages/CreateProposal";

import SearchPage from "./pages/ShopSearch/SearchPage";
import Recommend from "./pages/ShopSearch/Recommend";
import OurService from "./pages/OurService";
import ShopMemberMyPage from "./pages/MyPage/ShopMemberMyPage";
import AllProposal from "./pages/AllProposal";

import ShopMypageStart from "./pages/ShopMyPageStart";
import Proposal from "./pages/Proposal";
import ShopInformationModify from "./pages/ShopInformationModify";
import ShopMyPageProgressive from "./pages/ShopMyPageProgressive";
import EditProposal from "./pages/EditProposal";

import ShopMyPageProgressive from "./pages/ShopMyPageProgressive";

import ShopInformationRegister from "./pages/MyPage/ShopInformationRegister";
import ShopInformationModify from "./pages/MyPage/ShopInformationModify";
import LoginLoading from "./pages/Auth/LoginLoading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainHome />} />
        <Route exact path="/loginhome" element={<LoginHome />} />
        <Route exact path="/loading" element={<LoadingPage />} />
        <Route exact path="/ShopDetailPage" element={<ShopDetailPage />} />
        <Route exact path="/AddSchedulePage" element={<AddSchedulePage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/recommend" element={<Recommend />} />

        <Route path="/create/*" element={<CreateProposal />} />
        <Route path="/edit/*" element={<EditProposal />} />
        <Route path="/proposal/:id" element={<Proposal />} />

        <Route exact path="/serviceinfo" element={<OurService />} />
        <Route exact path="/mypagehost" element={<ShopMemberMyPage />} />
        <Route exact path="/allproposal" element={<AllProposal />} />
        <Route exact path="/shopdetail" element={<ShopDetailPage />} />
        <Route exact path="/shopmypagestart" element={<ShopMypageStart />} />
        <Route
          exact
          path="/shopregister"
          element={<ShopInformationRegister />}
        />
        <Route exact path="/shopmodify" element={<ShopInformationModify />} />
        <Route
          exact
          path="/shopprogressive"
          element={<ShopMyPageProgressive />}
        />
        <Route exact path="/kakaologin" element={<LoginLoading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
