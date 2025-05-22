import React from 'react';
const SearchBar = ({ query, onChange }) => (
  <input
    type="text"
    placeholder="Search by name or location..."
    className="w-full p-2 border rounded mb-4"
    value={query}
    onChange={(e) => onChange(e.target.value)}
  />
);
export default SearchBar;
