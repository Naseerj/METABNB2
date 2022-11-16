import React from "react";
import Wolf from '../Images/image 66.png'
import "./Navbar.css";
import Logo from "../Images/Group.png";
import { useRef } from "react";
import walletToken from '../Images/image 69.png'
import Arrow from '../Images/Vector (16).svg'
import x from '../Images/x.svg'

const Navbar = () => {

  const ref1 = useRef()
  const nav = useRef()
  const btnref = useRef()
  const divRef = useRef()
  const bodyRef = useRef()
  const iconRef = useRef()


  function iconClick (){
    if(divRef.current.style.display === 'block'){
      divRef.current.style.display = 'none'
    }
    divRef.current.style.display = 'none'
  }
  function displayWallet (){
    console.log('hello')
    if(divRef.current.style.display === 'block'){
      divRef.current.style.display = 'none'
      divRef.current.style.display.position = 'absolute'
    }else{
      divRef.current.style.display = 'block'
      // bodyRef.current.style.opacity = 
      // divRef.current.style.display.position = 
    }
    
  }


 function handleClick (){
  console.log('hello')
  if(nav.current.style.display === 'none'){
    nav.current.style.display = 'flex'
  }else{
    nav.current.style.display = 'none'
  }
 }
  
      
  return (
    <div>
      <nav ref={bodyRef} className="navbar">
        <div>
          <img className="logo" src={Logo} alt="" />
        </div>
        <h5 ref={ref1} onClick={handleClick}  className="toggle-button" href="-">
          <span  className="bar"></span>
          <span  className="bar"></span>
          <span className="bar"></span>
        </h5>
        <div ref={nav} className="navbar-links">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a  href="/places">PLACE TO STAY</a>
            </li>
            <li>
              <a href="-">NFTS</a>
            </li>
            <li>
              <a href="-">COMMUNITY</a>
            </li>
          </ul>
        </div>
        <button ref={btnref} onClick={()=>{
          displayWallet()
        }} className="btn1">Connect Wallet</button>
      </nav>

      <div ref={divRef} className="active">
        <div className="flare2">
        <h1>Connect Wallet</h1>
          <img ref={iconRef} onClick={()=>{
            iconClick()
          }} className="x" src={x} alt="" />
          
        </div>
        <hr />
      
        <p>Choose your prefered wallet </p>
        <div className="div1">
       <div className="flare">
       <img src={Wolf} alt="" />
        <p>Metamask</p>
       </div>
        <img src={Arrow} alt="" />
        </div>
       <div className="div2">
       <div className="flare">
       <img src={walletToken} alt="" />
       <p>WalletConnect</p>
       </div>
        <img src={Arrow} alt="" />
       </div>
      </div>
    </div>
  );
};

export default Navbar;
