import React from "react";
import "./Footer.css";
import Logo from "../Images/Group (1).svg";
import Facebook from "../Images/Vector (14).svg";
import Instagram from "../Images/instagram-216-721958.svg";
import Twitter from "../Images/Vector (15).svg";

const Footer = () => {
  return (
    <footer className="footie">
      <div className="footerdiv">
        <div className="icons">
          <img className="logosec3" src={Logo} alt="" />
          <div className="fulldiv">
          <div className="icondiv">
            <img className="facebook" src={Facebook} alt="" />
            <img className="instagram" src={Instagram} alt="" />
            <img className="twitter" src={Twitter} alt="" />
          </div>
          <div>
            <h3 className="header1footer"> 2022 Metabnb</h3>
          </div>
          </div>
        </div>

        <div className="foot1">
          <h1>Community</h1>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div className="foot1">
          <h1>Places</h1>
          <p>Castles</p>
          <p>Farm</p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div className="foot1">
          <h1>About us</h1>
          <p>Road map</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
