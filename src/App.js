import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const ACCESS_KEY = 'j4CO6QNxXrRSCswL-P55K2gminmMfrfmtb0VjDidBIo';

  const fetchImages = useCallback(async (reset = false) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: { query: searchTerm, page: page },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      });

      setImages((prevImages) => reset ? response.data.results : [...prevImages, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, page]);

  useEffect(() => {
    if (searchTerm) {
      fetchImages(true);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (page > 1) {
      fetchImages();
    }
  }, [page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchImages(true);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <ImageGrid images={images} loading={loading} />
      {images.length > 0 && !loading && (
        <button onClick={loadMore} className="load-more">
          Load More
        </button>
      )}
    </div>
  );
};

export default App;
