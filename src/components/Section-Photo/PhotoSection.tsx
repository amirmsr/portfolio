import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { grey } from "@mui/material/colors";



const PhotoSection: React.FC = () => {
  return (
    <main className="container text-center mt-5" style={{paddingTop:"50px"}}>
      <br /><br />
      <div className="link-container">
        <div className="link-item">
          <Link className="link"  to={"projet-maroc"}>
                Projet maroc
          </Link>
          <KeyboardDoubleArrowRightIcon sx={{ color: grey[500] }}></KeyboardDoubleArrowRightIcon>
        </div>
        <div className="link-item">
          <Link className="link"  to={"projet-maroc"}>
                Projet maroc
          </Link>
          <KeyboardDoubleArrowRightIcon sx={{ color: grey[500] }}></KeyboardDoubleArrowRightIcon>
        </div>
        <div className="link-item">
          <Link className="link"  to={"projet-maroc"}>
                Projet maroc
          </Link>
          <KeyboardDoubleArrowRightIcon sx={{ color: grey[500] }}></KeyboardDoubleArrowRightIcon>
        </div>
    </div>
    </main>
  );
};

export default PhotoSection;
