import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import HomeA from "../pages/HomePage";
import Footer from "../components/Footer";

import AboutPage2 from "../pages/AboutPage_2";
import ContactAdvancedWithMapBottomWealth from "../pages/ContactUs";
import ServicesPage from "../pages/Services";
import WealthManagementDetails from "../pages/WealthManagementDetails";
import SmartInvestmentStrategies from "../pages/SmartInvestmentStrategies";

export const HomeRoutes = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomeA />} />
            <Route path="/about" element={<AboutPage2/>} />
            <Route path="/contact" element={<ContactAdvancedWithMapBottomWealth/>} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/wealth-management" element={<WealthManagementDetails/>} />
            <Route path="/services/smart-investments" element={<SmartInvestmentStrategies/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};
