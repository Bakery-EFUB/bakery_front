import './App.css';
import Proposal6 from './pages/Proposal6';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import LoginHome from './pages/LoginHome';
import MainHome from './pages/MainHome';
import MyProposal from './pages/MyProposal';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/loginhome" element={<LoginHome />} />
				<Route exact path="/loading" element={<LoadingPage />} />
				<Route exact path="/proposal" element={<MyProposal />} />
				<Route exact path="/home" element={<MainHome />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
