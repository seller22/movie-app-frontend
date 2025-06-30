

import React, { useState, useEffect } from 'react';
import './App.css';
import { Loader, ErrorMessage } from './LoadingStatesAndValidation';

const moviesData = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    image:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
  },
  {
    id: 2,
    title: 'The Dark Knight',
    year: 2008,
    image:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg'
  },
  {
    id: 3,
    title: 'Interstellar',
    year: 2014,
    image:
      'https://resizing.flixster.com/47rDB5jGZrHWyRMRYMZKenbTcHU=/fit-in/705x460/v2/https://resizing.flixster.com/Y_sqtbGDcspx4oob3nD-lojSLjc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyMWZjZTQ2LWQwZGItNGRhMi1hZjg3LWFhZDQ1YWU1OTQ2NC53ZWJw'
  },
   {
    id: 4,
    title: 'Mad Max: Fury Road',
    year: 2015,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQV8jxuJDy5giTsd9ofz4wD51ba5Aga2bGQ&s'
  },
   {
    id: 5,
    title: 'Heads of State',
    year: 2025,
    image:
      'https://assets.gadgets360cdn.com/pricee/assets/product/202504/Heads_of_State_poster_1_1745474817.jpg?downsize=215:301'
  },
   {
    id: 6,
    title: 'Extraction',
    year: 2020,
    image:
      'https://m.media-amazon.com/images/M/MV5BNDBhMmI3OWYtZTA2Ny00Y2RjLTliMWQtYWY5MGIwN2RlZGFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    id: 7,
    title: 'Dunkirk',
    year: 2017,
    image:
      'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/img_3071_7.jpeg'
  }
];

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleWatchlist = (movie) => {
    if (!movie) {
      setError('Invalid movie data');
      return;
    }
    setError('');
    setWatchlist((prev) =>
      prev.some((item) => item.id === movie.id)
        ? prev.filter((item) => item.id !== movie.id)
        : [...prev, movie]
    );
  };

  return (
    <div className="App">
      <h1>🎬 Free to Watch</h1>

      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <div className="movie-grid">
        {!isLoading &&
          moviesData.map((movie) => {
            const isInWatchlist = watchlist.some((item) => item.id === movie.id);
            return (
              <div key={movie.id} className="movie-card">
                <img src={movie.image} alt={movie.title} className="movie-poster" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <span>({movie.year})</span>
                </div>
                <button
                  className={`toggle-btn ${isInWatchlist ? 'active' : ''}`}
                  onClick={() => toggleWatchlist(movie)}
                >
                  {isInWatchlist ? 'Remove' : 'Add'}
                </button>
              </div>
            );
          })}
      </div>

      <h2>⭐ Your Watchlist ({watchlist.length})</h2>
      <div className="watchlist-grid">
        {watchlist.length === 0 ? (
          <p className="empty-text">No movies in your watchlist yet.</p>
        ) : (
          watchlist.map((movie) => (
            <div key={movie.id} className="watchlist-item">
              <img src={movie.image} alt={movie.title} className="watchlist-poster" />
              <p>{movie.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
