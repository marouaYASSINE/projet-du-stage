import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import axios from 'axios';
import HomeP from "./Components/HomeP/HomeP";
import Navbar from "./Components/Navbar/Navbar";
import Domain from "./Components/domain/domain";
import './App.css';
import Orga from "./Components/Orga/Orga";
import Hum from "./Components/Hum/Hum";
import Parte from "./Components/Parte/Parte";
import Fort from "./Components/Courant-Fort-Faible/Fort";
import FortC from "./Components/Fort-Faible-cont/FortC";
import FortC2 from "./Components/Fort-Faible-cont/FortC2";
import FortC3 from "./Components/Fort-Faible-cont/FortC3";
import Faible from "./Components/Courant-Fort-Faible/Faible";
import FaibleC from "./Components/Fort-Faible-cont/FaibleC";
import FaibleC2 from "./Components/Fort-Faible-cont/FaibleC2";
import FaibleC3 from "./Components/Fort-Faible-cont/FaibleC3";
import FaibleC4 from "./Components/Fort-Faible-cont/FaibleC4";
import Refer from "./Components/Refer/Refer";
import Securite from "./Components/Securite/Securite";
import Galerie from "./Components/Galerie/Galerie";
import Footer from "./Components/footer/Footer";
import Login from "./Components/Login/Login";
import ReferenceAdmin from './Components/AdminDashboard/ReferenceAdmin';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import the AOS CSS file
export const AuthContext = React.createContext();

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('light'); // Assuming you have a theme state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3001/checkAuth', { withCredentials: true });
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <AppContent theme={theme} setTheme={setTheme} />
      </Router>
    </AuthContext.Provider>
  );
};

const AppContent = ({ theme, setTheme }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';
  const isLoginRoute = location.pathname === '/login';
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {!isAdminRoute && !isLoginRoute && (
        <div className={`container ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <HomeP theme={theme} />
        </div>
      )}
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={isAuthenticated ? <ReferenceAdmin /> : <Navigate to="/login" />}
          />
          {/* Other routes */}
          <Route path="/" element={
            <>
              <section id="domain">
                <Domain />
              </section>
              <section id="orga">
                <Orga />
              </section>
              <section id="hum">
                <Hum />
              </section>
              <section id="parte">
                <Parte />
              </section>
              <section id="courant">
                <Fort />
              </section>
              <section id="fortC">
                <FortC />
              </section>
              <section id="fortC2">
                <FortC2 />
              </section>
              <section id="fortC3">
                <FortC3 />
              </section>
              <section id="faible">
                <Faible />
              </section>
              <section id="faibleC">
                <FaibleC />
              </section>
              <section id="faibleC2">
                <FaibleC2 />
              </section>
              <section id="faibleC3">
                <FaibleC3 />
              </section>
              <section id="faibleC4">
                <FaibleC4 />
              </section>
              <section id="secur">
                <Securite />
              </section>
              <section id="ref">
                <Refer />
              </section>
              <section id="galerie">
                <Galerie />
              </section>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </>
  );
};

export default App;
