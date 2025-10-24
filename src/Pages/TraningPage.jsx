// src/TrainingPage.js
import React from "react";
import TrainingProgram from "../components/TrainingProgram";

const TrainingPage = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.header}>Employee Training Program</h1>
      <TrainingProgram /> {/* The training content */}
    </div>
  );
};

const styles = {
  pageContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    fontSize: "2em",
    color: "#333",
    marginBottom: "20px",
  },
};

export default TrainingPage;
