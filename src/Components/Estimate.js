import React, {useRef} from "react";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";

export default function Estimate() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2tfr2lh', 'template_b8ifn28', form.current, 'MTQYOzcG_L3iE1IJ_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <section id="estimate" class="contact-section">
      <div className="merchant-info">
        <div className="merchant-header">
          <h2>Get An Estimate</h2>
        </div>
        <div className="icons">
          <EmailIcon />
          <p>Erikacr73@hotmail.com</p>
        </div>
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
        <button type="submit" onSubmit = {sendEmail} className="form-submit-btn">
          Lets Talk!
        </button>
      </form>
    </section>
  );
}
