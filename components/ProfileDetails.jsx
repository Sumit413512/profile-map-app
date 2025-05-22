import React from 'react';
const ProfileDetails = ({ profile }) => (
  <div className="mt-4 p-4 bg-white rounded shadow">
    <h2 className="text-2xl font-semibold mb-2">{profile.name}'s Full Profile</h2>
    <p><strong>Location:</strong> {profile.location}</p>
    <p><strong>Details:</strong> {profile.details}</p>
  </div>
);
export default ProfileDetails;
