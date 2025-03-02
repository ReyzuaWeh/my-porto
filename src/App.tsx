import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Page404 from "./pages/404";
import DashboardPage from "./pages/DashboardPage";
import FormCertification from "./pages/FormCertification";
import FormProject from "./pages/FormProject";
import LoginPage from "./pages/LoginPage";
import MainPage from './pages/MainPage';
import { DataRoute } from "./utils/OurRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={DataRoute["Home"]} element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path={DataRoute["Dashboard"]} element={<DashboardPage />} />
        <Route path={DataRoute["FormProject"]} element={<FormProject />} />
        <Route path={DataRoute["FormProject"] + "/:id"} element={<FormProject />} />
        <Route path={DataRoute["FormCertification"]} element={<FormCertification />} />
        <Route path={DataRoute["FormCertification"] + "/:id"} element={<FormCertification />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default App
