import React from "react";

const EmployeeDownloads = () => {
  // Replace these URLs with your actual Dropbox links
  const files = [
    {
      name: "New Employee Pack",
      link: "https://www.dropbox.com/scl/fi/8mhqi7v78tcb8r3dmydo0/New-Employee-Pack.zip?rlkey=2kltirovxi2pd75one53cugxv&st=m5r7kss9&dl=1",
    },
    {
      name: "New Employee Auth Form",
      link: "https://www.dropbox.com/scl/fi/7v119846m64flypzbz4yz/New-Employee-Auth-Form.zip?rlkey=lpdnv29jla8vl161cqkc3mlqj&st=5rk3z6c1&dl=1",
    },
    {
      name: "New Employee Training Pack",
      link: "https://www.dropbox.com/scl/fi/v2ho52dxtfsd5nszdm5bt/New-Employee-Training-Pack.zip?rlkey=ggm1gyz4n4gybgucf26fi1su7&st=t08vpnx7&dl=1",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Employee Download Center</h2>
      <p style={styles.description}>
        Welcome! Click on the links below to download your employee resources.
        Each ZIP contains important documents and forms for your onboarding.
      </p>
      <ul style={styles.list}>
        {files.map((file) => (
          <li key={file.name} style={styles.listItem}>
            <a
              href={file.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Simple inline styling for quick setup
const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  description: {
    textAlign: "center",
    color: "#555",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    margin: "10px 0",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#0073e6",
    padding: "10px 20px",
    borderRadius: "8px",
    transition: "background-color 0.3s",
  },
  linkHover: {
    backgroundColor: "#005bb5",
  },
};

export default EmployeeDownloads;
