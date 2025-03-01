import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import FormProject from "./components/templates/FormProject";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my" element={<DashboardPage />} />
        <Route path="/moleculs/input" element={<FormProject />} />
      </Routes>
    </Router>
  )
}

export default App
