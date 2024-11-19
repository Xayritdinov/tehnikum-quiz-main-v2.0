import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks } from "./pages";

import "./App.css";
import "./styles/main.css";

export const App = () => {
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/step-one" element={<StepOne />} />
          <Route path="/step-two" element={<StepTwo />} />
          <Route path="/step-three" element={<StepThree />} />
          <Route path="/step-four" element={<StepFour />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </Router>
  );
};
