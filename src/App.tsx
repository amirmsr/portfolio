import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import PhotoSection from "./components/Section-Photo/PhotoSection";
import GraphismeSection from "./components/Section-Graphisme/GraphismeSection";
import PhotoGalleryMaroc from "./components/Section-Photo/PhotoGalleryMaroc";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photo-section" element={<PhotoSection />} />
        <Route path="/graphisme-section" element={<GraphismeSection />} />
        <Route path="/projet-maroc" element={<PhotoGalleryMaroc/>}/>
      </Routes>
    </Router>
  );
};

export default App;
