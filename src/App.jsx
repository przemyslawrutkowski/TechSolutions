import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import Footer from './components/Footer';
import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <div className="app-container">
      <CustomNavbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
