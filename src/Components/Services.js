import React from "react";
import interior from "../assets/IMG-20230219-WA0014.jpg";
export default function Services() {
  return (
    <div id = "services" className="services-cntnr">
      <div className="service-info">
        <section className="service-text">
          <div className="header">
            <h2>Services</h2>
          </div>
          <p className >
            Welcome to Leo's Painting, my name is Leonidas Lopez. As an experienced painting contractor with over 30 years of expertise, I take pride in offering top-notch interior and exterior painting services. My commitment to quality ensures that each job is completed to the highest standards, and I always use top-quality products to ensure a lasting finish. Whether you need a fresh coat of paint for your home or office, or a complete exterior makeover, I have the skills and expertise to deliver results that exceed your expectations. Contact me today to learn more about my services and how I can help transform your space with a beautiful new paint job.
          </p>
        </section>
      </div>
      <div className="service-image">
        <img src={interior} alt="interior" />
      </div>
    </div>
  );
}
