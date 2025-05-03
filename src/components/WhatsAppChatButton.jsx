// WhatsAppChatButton.js
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WhatsAppChatButton = () => {
  const phoneNumber = "16674393624"; // Replace with your WhatsApp number
  const message = "Hi there! I would like to know more about your services.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppChatButton;
