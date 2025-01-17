import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import PhotoSection from "./components/Section-Photo/PhotoSection";
import ProjetMarocGallery from "./components/Section-Photo/Projet-Maroc/ProjetMarocGallery";
import ProjetMarocGalleryMob from "./components/Section-Photo/Projet-Maroc/ProjetMarocGalleryMob";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photo-section" element={<PhotoSection />} />
        <Route path="/photo-section/projet-marocMob" element={<ProjetMarocGalleryMob/>}/>
        <Route path="/photo-section/projet-maroc" element={<ProjetMarocGallery/>}/>
      </Routes>
    </Router>
  );
};

export default App;
