import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaIdBadge, FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const [secretKey, setSecretKey] = useState('');
  const navigate = useNavigate();

  // Function to generate secret key
  const generateSecretKey = () => {
    const randomKey = Math.random().toString(36).substring(7);
    setSecretKey(randomKey);
    alert('The secret key will expire in 30 minutes.');
  };

  return (
    <div style={{ maxWidth: '700px', margin: '50px auto', padding: '40px', borderRadius: '15px', backgroundColor: '#f8f9fa', boxShadow: '0 8px 50px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '30px', color: '#333' }}>
        <FaUser style={{ marginRight: '10px', color: '#000' }} /> Admin Profile
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <FaIdBadge style={{ marginRight: '10px', color: '#000' }} />
          <strong style={{ fontWeight: 'bold', marginRight: '10px', color: '#000' }}>Position:</strong>
          <span style={{ color: '#000' }}>Admin Manager</span>
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <FaIdBadge style={{ marginRight: '10px', color: '#000' }} />
          <strong style={{ fontWeight: 'bold', marginRight: '10px', color: '#000' }}>Employee ID:</strong>
          <span style={{ color: '#000' }}>EMP1001</span>
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <FaEnvelope style={{ marginRight: '10px', color: '#000' }} />
          <strong style={{ fontWeight: 'bold', marginRight: '10px', color: '#000' }}>Email:</strong>
          <span style={{ color: '#000' }}>admin@example.com</span>
        </div>
        {/* Secret Key Generator */}
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <FaKey style={{ marginRight: '10px', color: '#000' }} />
          <strong style={{ fontWeight: 'bold', marginRight: '10px', color: '#000' }}>Secret Key:</strong>
          <span style={{ color: '#000' }}>{secretKey}</span>
          <button onClick={generateSecretKey} style={{ marginLeft: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 15px', cursor: 'pointer' }}>Generate</button>
        </div>
        {/* Go Back Button */}
       <center> <button onClick={() => navigate('/admin-dash')} style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 15px', cursor: 'pointer', alignSelf: 'flex-start' }}>Go Back</button></center>
      </div>
    </div>
  );
};

export default AdminProfile;
