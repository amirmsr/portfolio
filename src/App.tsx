import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import PhotoSection from "./components/Section-Photo/PhotoSection";
import MarocGallery from "./components/Section-Photo/Maroc-projet/MarocGallery";
import ProjetMarocGalleryMob from "./components/Section-Photo/Maroc-projet/MarocGalleryMob";
import RerGallery from "./components/Section-Photo/Rer-projet/RerGallery";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photo-section" element={<PhotoSection />} />
        <Route path="/photo-section/projet-marocMob" element={<ProjetMarocGalleryMob/>}/>
        <Route path="/photo-section/projet-maroc" element={<MarocGallery/>}/>
        <Route path="/photo-section/projet-rer" element={<RerGallery/>}/>
      </Routes>
    </Router>
  );
};

export default App;
