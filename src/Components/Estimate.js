import React from "react";
import EmailIcon from '@mui/icons-material/Email';
export default function Estimate() {
  return (
    <section id="estimate" class="contact-section">
      <div className="merchant-info">
        <div className="merchant-header">
          <h2>Get An Estimate</h2>
        </div>
        <div className="icons"></div>
        <EmailIcon />
        <p>Leolopez1973@comcast.net</p>
      </div>
      <form class="contact-form">
        <input
          type="text"
          name="name"
          id="name"
          autocomplete="off"
          placeholder="name"
        />
        <input
          type="text"
          name="email"
          id="email"
          autocomplete="off"
          placeholder="email"
        />
        <textarea
          name="msg"
          id="msg"
          placeholder="message"
          autocomplete="off"
        ></textarea>
        <button type="submit" class="form-submit-btn">
          Lets Talk!
        </button>
      </form>
    </section>
  );
}
