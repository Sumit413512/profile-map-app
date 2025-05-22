import React, { useState } from 'react';
const AdminForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState(initialData || { name: '', description: '', location: '', photo: '', details: '', coordinates: { lat: '', lng: '' } });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'lat' || name === 'lng') {
      setForm((prev) => ({ ...prev, coordinates: { ...prev.coordinates, [name]: parseFloat(value) } }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }} className="space-y-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="p-2 border w-full" required />
      <input name="photo" value={form.photo} onChange={handleChange} placeholder="Photo URL" className="p-2 border w-full" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="p-2 border w-full" />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="p-2 border w-full" />
      <input name="lat" value={form.coordinates.lat} onChange={handleChange} placeholder="Latitude" className="p-2 border w-full" />
      <input name="lng" value={form.coordinates.lng} onChange={handleChange} placeholder="Longitude" className="p-2 border w-full" />
      <textarea name="details" value={form.details} onChange={handleChange} placeholder="More details" className="p-2 border w-full"></textarea>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};
export default AdminForm;
