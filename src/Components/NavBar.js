import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/logo/blue.svg"
import {motion} from "framer-motion"
export default function NavBar({scrollToSection}) {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 10) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const navStyle = {
      backgroundColor: `rgba(230, 230, 212, ${opacity})`,
  }

  return (
    <div className="navbar" style ={navStyle}>
      <motion.div whileHover = {{scale:0.8}} onClick = {() => scrollToSection("hero")} className="logo">
          <img src = {logo} alt = "logo" />
      </motion.div>
      <div className = "button-cntnr">
          <button onClick = {() => scrollToSection('services')}>Services</button>
          <button  onClick = {() => scrollToSection('houses')}>Houses</button>
          <button  onClick = {() => scrollToSection('estimate')}>Get an Estimate</button>
      </div>
    </div>
  );
}
