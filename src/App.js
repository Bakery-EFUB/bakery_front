import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import LoginHome from "./pages/LoginHome";
import MainHome from "./pages/MainHome";
import CreateProposal from "./pages/CreateProposal";
import ShopDetailPage from "./pages/ShopDetailPage";
import AddSchedulePage from "./pages/AddSchedulePage";
import SearchPage from "./pages/SearchPage";
import Recommend from "./pages/Recommend";
import OurService from "./pages/OurService";
import ShopMemberMyPage from "./pages/ShopMemberMyPage";
import AllProposal from "./pages/AllProposal";

import Proposal from "./pages/Proposal";

import ShopInformationRegister from "./pages/ShopInformationRegister";
import ShopMypageStart from "./pages/ShopMyPageStart";
import PickupSchedulePage from "./pages/PickupSchedulePage";
import ShopInformationModify from "./pages/ShopInformationModify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/loginhome" element={<LoginHome />} />
        <Route exact path="/loading" element={<LoadingPage />} />

        <Route exact path="/" element={<MainHome />} />
        <Route exact path="/shopdetail" element={<ShopDetailPage />} />
        <Route exact path="/addschedule" element={<AddSchedulePage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/recommend" element={<Recommend />} />
        <Route path="/create/*" element={<CreateProposal />} />
        <Route exact path="/proposal/*" element={<Proposal />} />
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
        <Route exact path="/pickupschedule" element={<PickupSchedulePage />} />
        <Route exact path="/addschedule" element={<AddSchedulePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
