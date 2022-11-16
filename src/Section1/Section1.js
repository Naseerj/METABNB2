import React from "react";
import "./Section1.css";
import Illustration from "../Images/Group 4028.png";
import Token from "../Images/Group 59537.png";
import Rabbit from "../Images/Group 4040.png";
import Opensea from "../Images/Frame 4041.svg";
import { useRef } from "react";

const Section1 = () => {

  return (
    <div className="pad">
      <div className="section34">
        <div className="flexx">
          <div className="textsec3div">
            <h1 className="header1">
              Rent a <span className="span1">Place</span> away from{" "}
              <span className="span2">Home</span> in the{" "}
              <span className="span3">Metaverse</span>
            </h1>
            <p className="ptag">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="inpsec3div">
            <input
              className="inpsec1"
              type="text"
              placeholder="Search for location"
            />
            <button className="btnsec1">search</button>
            </div>
          </div>
          <div className="illudiv">
            <img className="illu" src={Illustration} alt="" />
          </div>
        </div>
      </div>
      <div className="hr">
        <img className="token"  src={Token} alt="" />
        <img src={Rabbit} alt="" />
        <img src={Opensea} alt="" />/{" "}
      </div>
    </div>
  );
};

export default Section1;

// {/* <div className="section1">
//   <div className="textsec1div">
//   <h1 className="header1">

//   <p className="ptag1">
//     we provide you access to luxury and affordable houses in the
//     metaverse, get a chance to turn your imagination to reality at your
//     comfort zone
//   </p>
//   </div>
//   <div className="illudiv">
//   <img className="illu" src={Illustration} alt="" />
//   </div>
// </div>
<div className="hr">
  <img src={Token} alt="" />
  <img src={Rabbit} alt="" />
  <img src={Opensea} alt="" />/{" "}
</div>;
