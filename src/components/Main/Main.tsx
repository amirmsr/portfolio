import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { grey } from "@mui/material/colors";

const Main: React.FC = () => {
  return (
    <main className="container text-center mt-5 ">
      <div>
        <img
          className={styles.responsiveImage}
          src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/AC79ACB4-4795-4F1E-A521-CFD51019CC2B_1_105_c-JHlYd2v9EiTv474HzhasB57zsehrPg.webp"
          alt=""
        />
      </div>
      <br /><br/>
      <div className="link-item">
        <Link className="link" to="/photo-section">
        Découvrir
        </Link>
        <KeyboardDoubleArrowRightIcon sx={{ color: grey[500] }}></KeyboardDoubleArrowRightIcon>
      </div>
    </main>
  );
};

export default Main;
