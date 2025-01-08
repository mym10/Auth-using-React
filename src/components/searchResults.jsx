import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components2/MovieCard';
import movies from '../movies.json';
import MovieModal from '../components2/MovieModal';

const SearchResults = ({theme, currentTheme}) => {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMovieAction = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchQuery(query)

    if (query.trim()) {
      const filteredResults = movies.filter((movie) => {
        const isTitleMatch = movie.Title.toLowerCase().includes(query.toLowerCase());
        const isGenreMatch = movie.Genre.some((genre) =>
            genre.toLowerCase().includes(query.toLowerCase())
        );
        return isTitleMatch || isGenreMatch;
      });
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [location.search]);

  return (
    <div className='search-results-home' style={{backgroundColor: currentTheme.backgroundColor, color: currentTheme.color}}>
      <h2>Search Results for "{searchQuery || 'All'}"</h2>
      <div className='search-results'>
        {searchResults.length > 0 ? (
          searchResults.map((movie, index) => (
            <MovieCard
              key={index}
              movie = {movie}
              movieImage={movie.Images[0]}
              movieTitle={movie.Title}
              actionText="View Details"
              onAction={() => handleMovieAction(movie)}
              theme={theme}
              currentTheme={currentTheme}
            />
          ))
        ) : (
          <p>No results found for your search.</p>
        )}
      </div>
      {selectedMovie && (
                <MovieModal
                    movieImage={selectedMovie.Images[2]}
                    movieTitle={selectedMovie.Title}
                    movieYear={selectedMovie.Year}
                    runtime={selectedMovie.Runtime}
                    genres={selectedMovie.Genre}
                    director={selectedMovie.Director}
                    open={modalOpen}
                    onClose={handleModalToggle}
                    theme={theme}
                    currentTheme={currentTheme}
                />
    )} 
    </div>
  );
};

export default SearchResults;
