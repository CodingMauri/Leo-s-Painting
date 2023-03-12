import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/Leo'sPainting-no-bg.png"
export default function NavBar() {
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
      opacity: `${opacity}`,
      backgroundColor: `rgba(230, 230, 212, ${opacity})`,
  }

  return (
    <div className="navbar" style ={navStyle}>
      <div className="logo">
          <img src = {logo} alt = "logo" />
      </div>
      <div className = "button-cntnr">
          <button>Services</button>
          <button>Houses</button>
          <button>Get an Estimate</button>
      </div>
    </div>
  );
}
