import React from 'react';

const Maintenance = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#dc3545', marginBottom: '20px' }}>Under Maintenance</h1>
      <p style={{ fontSize: '18px', color: '#6c757d' }}>We are currently performing maintenance on our site. Please check back later.</p>
      <i className="fas fa-tools" style={{ fontSize: '50px', color: '#ffc107', marginTop: '20px' }}></i>
    </div>
  );
};

export default Maintenance;
