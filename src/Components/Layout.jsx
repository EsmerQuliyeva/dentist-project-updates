import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
