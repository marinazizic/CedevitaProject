import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NarancaPg from "./Components/NarancaPg";
import LimunPg from "./Components/LimunPg";
import BazgaPg from "./Components/BazgaPg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/NarancaPg" element={<NarancaPg />} />
            <Route path="/LimunPg" element={<LimunPg />} />
            <Route path="/BazgaPg" element={<BazgaPg />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
