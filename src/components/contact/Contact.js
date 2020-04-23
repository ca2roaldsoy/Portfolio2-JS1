import React from "react";
import ContactForm from "./ContactForm";
import Title from "../title/Title";

function Contact() {
  return (
    <div className="contact">
      <Title title="Contact Us" className="contact__title" role="heading" />
      <ContactForm />
    </div>
  );
}

export default Contact;
