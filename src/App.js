import "./App.css";
import ProposalPage from "./pages/ProposalPage";
import TopBar from "./components/TopBar";
import ProposalBox from "./components/WholeProposals/PropasalBox";
import ChooseBox from "./components/WholeProposals/ChooseBox";
import ProposalTitle from "./images/ProposalTitle.svg"
function App() {
  return (
    <div>
      <TopBar/>
      <img src={ProposalTitle}/>
      <ChooseBox/>
      <ProposalBox/>
    </div>
  );
}

export default App;
