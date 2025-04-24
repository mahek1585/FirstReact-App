import React from 'react';

const UserList = ({ data }) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          width: '300px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '20px', color: '#333' }}>User List</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {data.map((user) => (
            <li
              key={user.id}
              style={{
                margin: '10px 0',
                padding: '10px',
                backgroundColor: '#e0f7fa',
                borderRadius: '8px',
                color: '#00796b',
                fontWeight: '500',
              }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
