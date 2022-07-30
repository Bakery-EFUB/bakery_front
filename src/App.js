import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import LoginHome from "./pages/LoginHome";
import MainHome from "./pages/MainHome";
import ShopDetailPage from "./pages/ShopDetailPage";
import AddSchedulePage from "./pages/AddSchedulePage";

import Recommend from "./pages/Recommend";
import OurService from "./pages/OurService";

import ShopMypageStart from "./pages/ShopMyPageStart";
import ShopInformationModify from "./pages/ShopInformationModify";
import ShopMyPageProgressive from "./pages/ShopMyPageProgressive";
import ShopInformationRegister from "./pages/MyPage/ShopInformationRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/loginhome" element={<LoginHome />} />
        <Route exact path="/loading" element={<LoadingPage />} />
        <Route exact path="/" element={<MainHome />} />
        <Route exact path="/ShopDetailPage" element={<ShopDetailPage />} />
        <Route exact path="/AddSchedulePage" element={<AddSchedulePage />} />
        <Route exact path="/search" element={<SearCh />} />
        <Route exact path="/recommend" element={<Recommend />} />

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
