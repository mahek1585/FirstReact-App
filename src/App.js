import React from 'react';
import UserList from './UserList';

function App() {
  const users = [
    { id: 1, name: 'Arbaj Ansari' },
    { id: 2, name: 'Tanmay Shinde' }
  ];

  return (
    <div>
      <UserList data={users} />
    </div>
  );
}

export default App;
