import './App.css';
import Proposal6 from './pages/Proposal6';
import Proposal7 from './pages/Proposal7';
import ProposalDone from './pages/ProposalDons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import LoginHome from './pages/LoginHome';
import MainHome from './pages/MainHome';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/loginhome" element={<LoginHome />} />
				<Route exact path="/loading" element={<LoadingPage />} />
				<Route exact path="/proposal" element={<Proposal6 />} />
				<Route exact path="/home" element={<MainHome />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
