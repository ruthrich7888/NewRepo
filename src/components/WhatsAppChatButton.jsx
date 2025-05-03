// WhatsAppChatButton.js
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WhatsAppChatButton = () => {
  return (
    <a
      href="https://wa.me/16674393624" // Replace with your actual number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppChatButton;
