import React from 'react';

const FavouritesSkeleton = () => {
  return (
    <div className="favourite-page-skeleton">
      <h2 className="skeleton-title">Favourites</h2>
      <div className="favourite-results-skeleton">
        {/* Placeholder for movie cards */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="movie-card-skeleton">
            <div className="movie-image-skeleton skeleton"></div>
            <div className="movie-title-skeleton skeleton"></div>
            <div className="movie-action-skeleton skeleton"></div>
          </div>
        ))}
      </div>
      <div className="no-favourites-skeleton">
        <div className="skeleton-text-line"></div>
        <div className="skeleton-text-line"></div>
      </div>
    </div>
  );
};

export default FavouritesSkeleton;
