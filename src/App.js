import "./App.css";
import ProposalPage from "./pages/ProposalPage";
import ProposalBox from "./components/WholeProposals/PropasalBox";
import ChooseBox from "./components/WholeProposals/ChooseBox";
function App() {
  return (
    <div>
      <ChooseBox/>
      <ProposalBox/>
    </div>
  );
}

export default App;
