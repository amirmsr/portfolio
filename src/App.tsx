import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import PhotoSection from "./components/Photo-Section/PhotoSection";
import MarocGallery from "./components/Photo-Section/Maroc-projet/MarocGallery";
import RerGallery from "./components/Photo-Section/Rer-projet/RerGallery";

import FormesCouleursGallery from "./components/Photo-Section/Formes-Couleurs-projet/FormesCouleursGallery";
import AsieGallery from "./components/Photo-Section/Asie-projet/AsieGallery";
import MerchPage from "./components/Merch/MerchPage";
import Contact from "../src/components/Contact/Contact";
import About from "../src/components/About/About";



const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photo-section" element={<PhotoSection />} />
        <Route path="/photo-section/projet-maroc" element={<MarocGallery/>}/>
        <Route path="/photo-section/projet-rer" element={<RerGallery/>}/>
        <Route path="/photo-section/projet-asie" element={<AsieGallery/>}/>
        <Route path="/photo-section/formes-couleurs" element={<FormesCouleursGallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/merch" element={<MerchPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
