// BackToTopButton.js
import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="back-to-top"
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    )
  );
};

export default BackToTopButton;
