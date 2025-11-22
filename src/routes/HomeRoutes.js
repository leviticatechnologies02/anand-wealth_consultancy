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
import GlobalMarketAccess from "../pages/GlobalMarketAccess";
import PersonalizedFinancialPlanning from "../pages/PersonalizedFinancialPlanning";
import TaxEfficientStrategies from "../pages/TaxEfficientStrategies";
import PortfolioMonitoringRebalancing from "../pages/PortfolioMonitoringRebalancing";
import RetirementPlanning from "../pages/RetirementPlanning";
import NRIInternationalAdvisory from "../pages/NRIInternationalAdvisory";
import ScrollToTop from "../components/ScrollToTop";

export const HomeRoutes = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <ScrollToTop/>
        <main>
          <Routes>
            <Route path="/" element={<HomeA />} />
            <Route path="/about" element={<AboutPage2/>} />
            <Route path="/contact" element={<ContactAdvancedWithMapBottomWealth/>} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/wealth-management" element={<WealthManagementDetails/>} />
            <Route path="/services/smart-investments" element={<SmartInvestmentStrategies/>} />
            <Route path="/services/global-market" element={<GlobalMarketAccess/>} />
            <Route path="/services/personalize-financial" element={<PersonalizedFinancialPlanning/>} />
            <Route path="/services/tax-strategies" element={<TaxEfficientStrategies />} />
            <Route path="/services/portfolio-monitoring" element={<PortfolioMonitoringRebalancing/>} />
            <Route path="/services/retirement-planning" element={<RetirementPlanning/>} />
            <Route path="/services/nri-advisory" element={<NRIInternationalAdvisory />} />

          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};
