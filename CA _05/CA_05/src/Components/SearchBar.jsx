import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <h1>Search Books</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search books..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
