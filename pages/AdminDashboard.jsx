import React, { useState } from 'react';
import profilesData from '../data/profiles.json';
import AdminForm from '../components/AdminForm';

const AdminDashboard = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [editing, setEditing] = useState(null);

  const handleAddOrEdit = (profile) => {
    if (editing !== null) {
      setProfiles(profiles.map((p, i) => (i === editing ? profile : p)));
      setEditing(null);
    } else {
      setProfiles([...profiles, profile]);
    }
  };

  const handleDelete = (index) => {
    setProfiles(profiles.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Admin Dashboard</h1>
      <AdminForm onSubmit={handleAddOrEdit} initialData={editing !== null ? profiles[editing] : null} />
      <ul className="mt-6 space-y-4">
        {profiles.map((profile, i) => (
          <li key={i} className="p-4 bg-white shadow rounded">
            <h3>{profile.name}</h3>
            <button className="text-blue-500 mr-2" onClick={() => setEditing(i)}>Edit</button>
            <button className="text-red-500" onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AdminDashboard;
