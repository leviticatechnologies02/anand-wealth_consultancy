import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import HomeA from "../pages/HomePage";
import Footer from "../components/Footer";
import AboutPage from "../pages/AboutPage";

export const HomeRoutes = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomeA />} />
            <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};
