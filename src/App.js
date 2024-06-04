import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
