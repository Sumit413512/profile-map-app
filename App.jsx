import React, { useState } from 'react';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  const [admin, setAdmin] = useState(false);
  return (
    <div>
      <header className="p-4 bg-gray-800 text-white flex justify-between">
        <h1 className="text-lg">Profile App</h1>
        <button onClick={() => setAdmin(!admin)} className="bg-white text-black px-3 py-1 rounded">
          {admin ? 'Logout' : 'Admin Login'}
        </button>
      </header>
      {admin ? <AdminDashboard /> : <Home />}
    </div>
  );
};
export default App;
