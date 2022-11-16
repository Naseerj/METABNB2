import React from "react";
import "./Section3.css";
import NFTS from "../Images/Frame 59546.png";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="section3">
        <div className="sec3textdiv">
        <h1 className="header1sec3">Metabnb NFTs</h1>
        <p className="ptagsec3">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="btnsec3">Learn More</button>
        </div>
        <img className="nfts" src={NFTS} alt="" />
      </div>
    </div>
  );
};

export default Section3;
