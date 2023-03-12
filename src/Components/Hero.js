import React from "react";
import heroImage from "../assets/IMG-20230219-WA0004.jpg";
export default function Hero() {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-title">
        <h1>
          Leo's Painting <br></br> Experience and Quality
        </h1>
      </div>
    </div>
  );
}
