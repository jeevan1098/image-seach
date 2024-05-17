import React from 'react';

const Header = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <header>
      <h1>Jeevan Image Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for images..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;
