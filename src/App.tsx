import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import PhotoSection from "./components/Photo-Section/PhotoSection";
import MarocGallery from "./components/Photo-Section/Maroc-projet/MarocGallery";
import RerGallery from "./components/Photo-Section/Rer-projet/RerGallery";
import About from "./components/About/About";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photo-section" element={<PhotoSection />} />
        <Route path="/photo-section/projet-maroc" element={<MarocGallery/>}/>
        <Route path="/photo-section/projet-rer" element={<RerGallery/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    </Router>
  );
};

export default App;
