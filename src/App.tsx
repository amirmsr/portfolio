import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import PhotoSection from "./components/Section-Photo/PhotoSection";
import GraphismeSection from "./components/Section-Graphisme/GraphismeSection";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photo-section" element={<PhotoSection />} />
        <Route path="/graphisme-section" element={<GraphismeSection />} />
      </Routes>
    </Router>
  );
};

export default App;
