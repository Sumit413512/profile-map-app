import React, { useState, useEffect } from 'react';
import profilesData from '../data/profiles.json';
import ProfileCard from '../components/ProfileCard';
import MapView from '../components/MapView';
import ProfileDetails from '../components/ProfileDetails';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [detailedProfile, setDetailedProfile] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate loading
  }, []);

  const filteredProfiles = profilesData.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.location.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Profile List</h1>
      <SearchBar query={query} onChange={setQuery} />
      <div className="grid md:grid-cols-2 gap-4">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} onShowMap={setSelectedProfile} onViewDetails={setDetailedProfile} />
        ))}
      </div>
      {selectedProfile && (
        <div className="mt-6">
          <h2 className="text-2xl mb-2">Location of {selectedProfile.name}</h2>
          <MapView coordinates={selectedProfile.coordinates} />
        </div>
      )}
      {detailedProfile && <ProfileDetails profile={detailedProfile} />}
    </div>
  );
};
export default Home;
