import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
function Hamburger({scrollToSection}) {
  const [isOpen, setIsOpen] = useState(false);

  const setMobileMenu = (scrollToSection) => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="hamburger-menu" onClick={setMobileMenu}>
      <MenuIcon />
      {isOpen && (
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <ul className = "mobile-scroll">
            <li onClick = {() => scrollToSection('services')}>Services</li>
            <li onClick = {() => scrollToSection('houses')}>Houses</li>
            <li onClick = {() => scrollToSection('estimate')}>Get An Estimate</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
