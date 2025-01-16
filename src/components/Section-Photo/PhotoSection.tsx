import React from "react";

import MenuDeroulant from "./Cards/MenuDeroulant";




const PhotoSection: React.FC = () => {
  return (
    <main className="container text-center mt-5">
      <h1 className="mb-4">Amir Mansour</h1>
      <br /><br />
      <div>
      <MenuDeroulant></MenuDeroulant>
    </div>
    </main>
  );
};

export default PhotoSection;
