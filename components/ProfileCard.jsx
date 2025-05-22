import React from 'react';
const ProfileCard = ({ profile, onShowMap, onViewDetails }) => (
  <div className="border rounded p-4 shadow-md bg-white">
    <img src={profile.photo} alt={profile.name} className="w-full h-48 object-cover rounded" />
    <h2 className="text-xl font-semibold mt-2">{profile.name}</h2>
    <p>{profile.description}</p>
    <div className="flex gap-2 mt-2">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => onShowMap(profile)}>Summary</button>
      <button className="bg-gray-600 text-white px-4 py-2 rounded" onClick={() => onViewDetails(profile)}>Details</button>
    </div>
  </div>
);
export default ProfileCard;
