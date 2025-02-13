import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Certification from "../pages/Certification";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/certification" Component={Certification} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
