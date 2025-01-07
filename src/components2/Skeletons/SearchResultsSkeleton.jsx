import React from 'react';

const SearchResultsSkeleton = () => {
  return (
    <div className="search-results-home-skeleton">
      <h2 className="skeleton-title">Search Results</h2>
      <div className="search-results-skeleton">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="movie-card-skeleton">
            <div className="movie-image-skeleton skeleton"></div>
            <div className="movie-title-skeleton skeleton"></div>
            <div className="movie-action-skeleton skeleton"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsSkeleton;
