import React from "react";
import './applayout.css'
import Navbar from "../components/navbar/Navbar";
import Footer from "../pages/main/_footer/Footer";
import { Outlet } from "react-router-dom";
const AppLayuot = () => {
  return (
    <div>
      <Navbar />
      <main className="main_content_conttainer">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayuot;
