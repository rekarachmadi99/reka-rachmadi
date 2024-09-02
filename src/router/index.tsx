import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/about" Component={About} />
        <Route path="/Contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
